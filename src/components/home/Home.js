import {Layout} from "./Layout";
import CustomNavBar from "../shared/CustomNavBar";
import {UserAuth} from "../../context/AuthContext";
import React from "react";
import Helmet from "react-helmet";


export default function Home() {
    const {user, logout} = UserAuth();
    

    return (
        <React.Fragment>
            <Helmet>
                <style>
                    {`
                        html, body{
                            font-family: 'Cormorant Upright', serif;
                        }
                         
                        #menu {
                            background-color: rgba(255, 255, 255, 1);
                        }
                   `}
                </style>
            </Helmet>
            <Layout user={user}>
                <CustomNavBar user={user}/>
            </Layout>
        </React.Fragment>
    )
}