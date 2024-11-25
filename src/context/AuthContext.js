import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"
import {useNavigate} from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import {auth, db} from "../firebase"
import users from "../utils/users";
import {doc, getDoc} from "firebase/firestore";
import {useFirestoreQueryData} from "@react-query-firebase/firestore";

const UserContext = createContext(undefined);

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {});
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const createUser = (name, email, password) => {
        // Updated when a guest does RSVP

        // Find first user matching inputted name
        // Assumes everyone has unique name
        const initialData = users.find((g) => g.name === name);

        if (initialData) {
            return createUserWithEmailAndPassword(auth, email, password).then((user) => {
                db.collection('users').doc(user.user.uid).set(initialData).catch((e) => {
                    console.log(e.message);
                })
            })
        } else {
            throw "That's weird... we can't seem to find you on the guest list :/";
        }

    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch (e) {
            console.log(e.message)
        }
    }

    const hasUserAccess = async (event, user) => {
        try {
            return await db.collection("users").doc(user.uid).get().then((doc) => {
                return (doc.get(event + ".invited") === true);
            });
        } catch (e) {
            console.log(e);
        }

    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            let userSessionTimeout = null;

            // We don't want a user to be logged in for more than 1 hr
            if (currentUser) {
                setUser(currentUser);
                currentUser.getIdTokenResult().then((idTokenResult) => {
                    const authTime = idTokenResult.claims.auth_time * 1000;
                    const sessionDurationMillis = 60 * 60 * 1000; // 60 min
                    const expirationMillis = sessionDurationMillis - (Date.now() - authTime);
                    userSessionTimeout = setTimeout(() => logout(), expirationMillis);
                });

                const ref = doc(db, "users", currentUser.uid);
                const userDoc = await getDoc(ref);
                const userData = userDoc.data();
                setUserData(userData);
            } else {
                setUser(null);
                clearTimeout(userSessionTimeout);
                userSessionTimeout = null;
            }
        });

        return () => {
            unsubscribe();
        };
    });

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn, userData}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}