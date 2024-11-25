import React from "react"
import { Content } from "./Content";
import { Box } from "../shared/Box";

export const Layout = ({ children, user }) => (
    <Box
        css={{
            maxW: "100%"
        }}
    >
        {children}
        <Content user={user}/>
    </Box>
);