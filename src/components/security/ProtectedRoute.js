import React from "react"
import {UserAuth} from "../../context/AuthContext";
import Login from "../account/Login";

export default function ProtectedRoute({children}) {
    const {user} = UserAuth();
    if (!user)  {
        return <Login/>
    }
    return children;
}