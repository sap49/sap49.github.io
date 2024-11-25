import {Layout} from "./Layout";
import CustomNavBar from "../shared/CustomNavBar";
import {UserAuth} from "../../context/AuthContext";

import React, {useEffect} from "react";
import Helmet from "react-helmet";
import {collection, query, where} from "firebase/firestore";
import {db} from "../../firebase";
import {useFirestoreQueryData} from "@react-query-firebase/firestore";


export default function Festivities() {
    const {user, userData} = UserAuth();
    return (
        <>
            <Helmet>
                <style>
                    {`
                        html, body, p{
                            font-family: 'Cormorant Upright', serif;
                        }
                        
                        p {
                            font-size: 18px;
                        }
                        
                        #menu {
                            background-color: rgba(255, 255, 255, 1);
                        }
                        
                        
                   `}
                </style>
            </Helmet>
            <Layout user={user} userData={userData}>
                <CustomNavBar user={user}/>
            </Layout>
        </>
    )
}