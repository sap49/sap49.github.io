import {Layout} from "./Layout";
import CustomNavBar from "../shared/CustomNavBar";
import {UserAuth} from "../../context/AuthContext";
import React from "react";
import Helmet from "react-helmet";


export default function TravelAcc() {
    const {user, logout} = UserAuth();
    console.log(user);

    return (
        <React.Fragment>
            <Helmet>
                <style>
                    {`
                        html, body, p{
                            font-family: 'Cormorant Upright', serif;
                        }
                        
                        p {
                            font-size: 18px;
                        }
                        
                        .material-symbols-outlined {
                          font-weight: 300;
                          color: #d6b12a;
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