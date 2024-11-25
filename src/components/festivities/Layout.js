import React from "react"
import { Content } from "./Content";
import { Box } from "../shared/Box";

export const Layout = ({ children, user, userData}) => (
    <Box
        css={{
            maxW: "100%"
        }}
    >
        {children}
        <Content user={user} userData={userData}/>
    </Box>
);