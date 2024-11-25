import React from "react"
import {Text} from "@nextui-org/react"
import {Box} from "../shared/Box"

export const Content = ({user}) => (
    <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
        
       <Text h2>User: {user && user.email}</Text>
    </Box>
);