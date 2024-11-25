import React, {useState} from "react"
import Helmet from "react-helmet"
import {Input, Spacer, Button, Text, Card, Image} from "@nextui-org/react"

import useInput from "../../utils/useInput";
import {Link, useNavigate} from "react-router-dom";
import {validateInput} from "../../utils/validateInput";
import {UserAuth} from "../../context/AuthContext";

export default function Login() {
    const {signIn} = UserAuth();
    const [name, bindName, resetName] = useInput("");
    const [inviteCode, bindInviteCode, resetInviteCode] = useInput("");

    // TODO: Display simplified error message to user
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const helper = React.useMemo(() => {
        if (!name) {
            return {
                text: "",
                color: "",
            };
        }
        const isValid = validateInput(name, 'Name');
        return {
            text: isValid ? "" : "Name is invalid.",
            color: isValid ? "success" : "error",
        };
    }, [name]);

    const helperInviteCode = React.useMemo(() => {
        if (!inviteCode) {
            return {
                text: "*Don't have an invite code? Contact Ram or Shreya.",
                color: "none",
            };
        }
        const isValid = validateInput(inviteCode, "Invite Code") && inviteCode.length > 5;
        return {
            text: isValid ? "" : "*Don't have an invite code? Contact Ram or Shreya.",
            color: isValid ? "success" : "error",
        };
    }, [inviteCode]);

    const {createUser} = UserAuth()

    // Login should handle SignUp automatically if user not found
    const submitHandler = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            const submitInviteCodeValid = validateInput(inviteCode, "Invite Code");
            const submitNameValid = validateInput(name, "Name");
            if (!!submitNameValid && !!submitInviteCodeValid) {
                const userName = name.toLowerCase().substring(0, name.indexOf(" ")) + "." + name.toLowerCase().substring(name.indexOf(" ") + 1, name.length);
                const email =   userName /*+ Math.floor(100000 + Math.random() * 900000)*/ + "@gmail.com";
                await signIn(email, inviteCode);
                navigate("/home");
            } else {
                setErrorMessage("Name and/or Invite Code is missing or entered incorrectly.");
            }
        } catch (e) {
            // TODO: Write a script to create all users at once WITH permissions
            if (e.code === "auth/user-not-found") {
                const submitInviteCodeValid = validateInput(inviteCode, "Invite Code");
                const submitNameValid = validateInput(name, "Name");
                try {
                    if (!!submitNameValid && !!submitInviteCodeValid) {
                        const userName = name.toLowerCase().substring(0, name.indexOf(" ")) + "." + name.toLowerCase().substring(name.indexOf(" ") + 1, name.length);
                        const email =   userName /*+ Math.floor(100000 + Math.random() * 900000)*/ + "@gmail.com";
                        await createUser(name, email, inviteCode)
                        navigate("/home")
                    } else {
                        setErrorMessage("Name and/or Invite Code is missing or entered incorrectly.");
                    }
                } catch (err) {
                    let message = err.message;
                    if (message) {
                        message = message.replace(/ *\([^)]*\) */g, "").replace("Firebase: ", "");
                    } else {
                        message = "That's weird... we can't seem to find you on the guest list :/";
                    }
                    setErrorMessage(message)
                }
            } else {
                let message = e.message;
                message = message.replace(/ *\([^)]*\) */g, "").replace("Firebase: ", "");
                setErrorMessage(message)
            }
        }
    }

    return (
        <React.Fragment>
            <Helmet>
                <style>
                    {`
                        html, body{
                            height: 100%;
                            width: 100%;
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-family: 'Kotta One', serif;
                        }
                        
                        p {
                          font-family: 'Kotta One', serif;
                        }
                   `}
                </style>
            </Helmet>
            <Image
                width={150}
                height={150}
                src={process.env.PUBLIC_URL + "/logos/logo.png"}
                alt="RS Logo"
            />
            <form onSubmit={submitHandler}>
                {errorMessage &&
                    <Card css={{ mw: "250px", backgroundColor:"$error" }} variant={"bordered"}>
                        <Card.Body>
                            <Text css={{color:"$white"}}>{errorMessage}</Text>
                        </Card.Body>
                    </Card>
                }
                <Spacer y={1}/>
                <Input
                    {...bindName}
                    id="Name"
                    underlined
                    onClearClick={resetName}
                    labelLeft={
                        <i className="gg-user"></i>
                    }
                    status={helper.color}
                    helperColor={helper.color}
                    helperText={helper.text}
                    placeholder="First and Last Name"
                    fullWidth="true"
                    maxLength="256"
                    css={{inputTextColor: "$primaryLight", paddingLeft: 0}}
                />
                <Spacer y={1.6}/>
                <Input.Password
                    {...bindInviteCode}
                    id="passcode"
                    type="password"
                    underlined
                    labelLeft={
                        <i className="gg-key"></i>
                    }
                    status={helperInviteCode.color}
                    helperColor={helperInviteCode.color}
                    helperText={helperInviteCode.text}
                    placeholder="Invite Code"
                    fullWidth="true"
                    maxLength="6"
                />
                <Spacer y={2.2}/>
                <Button size={"sm"} type="submit" css={{backgroundImage: '$gradient', width: '100%'}}>Login</Button>

                {
                    /* <Spacer y={0.2}/>
                    <Text size="$xs">Don't have an account? <Link to={"/signup"}>Sign Up</Link>.</Text>*/
                }


            </form>
        </React.Fragment>
    )
}