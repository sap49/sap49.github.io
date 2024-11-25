import React from "react"
import {Text} from "@nextui-org/react"
import { Chrono } from "react-chrono";
import {Box} from "../shared/Box"

export const Content = ({items}) => (
    <Box css={{px: "30%", pt: "3.5%", "@xsMax": {px: "$10"}}}>
        <Text h1>Our Story</Text>
        <Chrono items={items}
                mode="VERTICAL"
                theme={{
                    primary: "#7d0121",
                    secondary: "#d6b12a",
                    //cardBgColor: 'yellow',
                    //cardForeColor: 'violet',
                    titleColor: '#0e1a40',
                    titleColorActive: 'white'
                }}
        >
            <div>
                <h4>The One Where We Met</h4>
                <img src= {process.env.PUBLIC_URL+"date.jpg"} alt={""}/>
                <p align={"justify"}>
                    A few years prior, we both participated in a hackathon together so that's how we got to know each other. Fast forward to this day, and you'd find us in
                    the NJIT college campus center lounge for an impromptu date night. Not exactly a place you'd imagine, but we made it work. I'd actually like to think that we've been in a relationship
                    since we first met. Right from the beginning, there was inexplicable chemistry and a deep connection as if we'd known each other for a long time.
                </p>
            </div>
            <div>
                <h4>The Proposal</h4>
                <img src= {process.env.PUBLIC_URL+"proposal.jpg"} alt={""}/>
                <p align={"justify"}>
                    Going into today, I had absolutely no clue what was going to happen. I was only told to dress nice to get professional photos of us taken. If I was being honest, I only thought it was going to be a normal date but little did I know what Ram had planned in his mind. After spending most of Christmas Eve throughout the city
                    he took me to The Edge for our photo shoot. A little while into the shoot, he asked the photographers to pause the shoot. He then handed me a custom-drawn Maurauders Map based on the one from the Harry Potter movies using the locations we've been to throughout our relationship. While I was busy looking at that, he was busy getting down on one
                    knee giving me an unplanned speech asking me to marry him. Without hesitation, I said yes, and the rest is history!
                </p>
            </div>
            <div>
                <h4>We're Officially Engaged</h4>
                <img src= {process.env.PUBLIC_URL+"proposal.jpg"} alt={""}/>
                <p align={"justify"}>
                    I was already the luckiest man in the world for the past 2 years, but by saying yes she made me the luckiest man for the rest of my life. I always had an idea of how I wanted the girl of my dreams to be, but never how she was gonna look like.
                    Shreya was everything I thought she was going to be, but more. I can actually say that she was better than my dream girl. Fast (but slow) forward to today, and I can say that we're now engaged. Please join us for our wedding on July 9th, 2023!
                </p>
            </div>
        </Chrono>
    </Box>
);