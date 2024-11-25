import React from "react"
import {Spacer, Text} from "@nextui-org/react"
import {Box} from "../shared/Box"
import {CustomEventCard} from "../shared/CustomEventCard";
import ProtectedEvent from "../security/ProtectedEvent";

export const Content = ({user, userData}) => (
    <Box css={{px: "30%", pt: "3.5%", "@xsMax": {px: "$10"}}}>
        <Text h1>Festivities</Text>
        <ProtectedEvent events={["haldi", "mehndi_bride", "mehndi_groom"]} userData={userData}>
            <Text h2>Friday, July 7th, 2023</Text>
        </ProtectedEvent>
        <ProtectedEvent event={"haldi"} userData={userData}>
            <CustomEventCard color={"#CCB647"}
                             title={"Shreya's Haldi"}
                             location={"Swaminarayan Temple"}
                             time={"9 AM - 12 PM"}
                             description={"A mix of Ganesh Sthapan, Haldi, and Grah Shanti to kickoff wedding week for the bride. Lunch will be served."}
            />
            <Spacer y={1.0}/>
        </ProtectedEvent>
        <ProtectedEvent event={"mehndi_bride"} userData={userData}>
            <CustomEventCard color={"#557054"}
                             title={"Shreya's Mehndi"}
                             location={"Patel Residence"}
                             time={"6 PM - 11 PM"}
                             description={"A night of mehndi (henna) and good food."}
            />
            <Spacer y={1.0}/>
        </ProtectedEvent>
        <ProtectedEvent event={"mehndi_groom"} userData={userData}>
            <CustomEventCard color={"#557054"}
                             title={"Ram's Mehendi"}
                             location={"Parthasarathy Residence"}
                             time={"6 PM - 11 PM"}
                             description={"A night of mehndi (henna) and good food to kickoff wedding week for the groom."}
            />
            <Spacer y={1.5}/>
        </ProtectedEvent>
        <ProtectedEvent event={"sangeet"} userData={userData}>
            <Text h2>Saturday, July 8th, 2023</Text>
            <CustomEventCard color={"$sangeetGradient"}
                             title={"Sangeet"}
                             location={"Delta by Marriott, Somerset"}
                             time={"6 PM - 11 PM"}
                             description={"Dance performances interspersed with speeches, followed by Garba. Dinner to be served."}
            />
            <Spacer y={1.5}/>
        </ProtectedEvent>
        <Text h2>Sunday, July 9th, 2023</Text>
        <ProtectedEvent event={"baraat"} userData={userData}>
            <CustomEventCard color={"$gradient"}
                             title={"Baraat"}
                             location={"Delta by Marriott, Somerset"}
                             time={"9 AM - 10 AM"}
                             description={"A wedding procession to escort the groom to the Wedding."}
            />
            <Spacer y={1.0}/>
        </ProtectedEvent>
        { /*Wedding does not need to be protected since everyone's invited to that*/ }
        <CustomEventCard color={"$gradient"}
                         title={"Wedding"}
                         location={"Delta by Marriott, Somerset"}
                         time={"10 AM - 2 PM"}
                         description={"The joyous occasion of two hearts coming together as one! Lunch to be served."}
        />
        <Spacer y={1.0}/>
    </Box>
);