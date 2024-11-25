import React from "react"
import { Content } from "./Content";
import { Box } from "../shared/Box";

export const Layout = ({ children, items }) => (
    <Box
        css={{
            maxW: "100%"
        }}
    >
        {children}
        <Content items={items}/>
    </Box>
);