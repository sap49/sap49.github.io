import {Layout} from "./Layout";
import CustomNavBar from "../shared/CustomNavBar";
import {UserAuth} from "../../context/AuthContext";

import React from "react";
import Helmet from "react-helmet";


export default function Story() {
    const {user, logout} = UserAuth();
    const items = [
        {
            title: "Feb 10th, 2020",
        },
        {
            title: "Dec 24th, 2021",
        },
        {
            title: "Sept 5th, 2022"
        }
    ];

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
                        
                        #menu {
                            background-color: rgba(255, 255, 255, 1);
                        }
                        
                        a {
                            color: #000000;
                        }
                        
                        div[class^='timelinestyle__TimelineControlContainer'], div[class*=' timelinestyle__TimelineControlContainer']{
                            display: none;
                        }
                   `}
                </style>
            </Helmet>
            <Layout items={items}>
                <CustomNavBar user={user}/>
            </Layout>
        </React.Fragment>
    )
}