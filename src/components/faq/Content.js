import React from "react"
import {Text, Grid, Collapse, Link, Table} from "@nextui-org/react"
import {
    NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour,
    NumberCircleFive, NumberCircleSix, NumberCircleSeven, NumberCircleEight
} from "phosphor-react";
import {Box} from "../shared/Box"

export const Content = ({user}) => (
    <Box css={{px: "30%", pt: "3.5%", "@xsMax": {px: "$10"}}}>
        
        <Text h1>Frequently Asked Questions</Text>
        <Grid.Container gap={2}>
            <Grid>
                <Collapse.Group >
                    <Collapse title="When is the RSVP deadline?"
                              contentLeft={<NumberCircleOne color="#d6b12a" size={24}/>}
                    >
                        <Text>
                            We request that everyone please RSVP by April 1st, 2023 so that we can have an accurate
                            headcount!
                        </Text>
                    </Collapse>
                    <Collapse title="Is the venue wheelchair-accessible?"
                              contentLeft={<NumberCircleTwo color="#d6b12a" size={24}/>}
                    >
                        <Text>
                            Yes.
                        </Text>
                    </Collapse>
                    <Collapse title="Will the wedding be held indoors or outdoors?"
                              contentLeft={<NumberCircleThree color="#d6b12a" size={24}/>}
                    >
                        <Text>
                            We plan to hold it outdoors, weather permitting. In case of inclement weather, God forbid,
                            we will hold it indoors.
                        </Text>
                    </Collapse>
                    <Collapse title="What if I have any dietary restrictions?"
                              contentLeft={<NumberCircleFour color="#d6b12a" size={24}/>}
                    >
                        <Text>
                            All food provided will be strictly vegetarian — no meat and eggs. We'll try to
                            accommodate your needs as best as possible.
                        </Text>
                    </Collapse>
                    <Collapse title="Will there be any alcohol served?"
                              contentLeft={<NumberCircleFive color="#d6b12a" size={24}/>}
                    >
                        <Text>
                            No, but feel free to purchase and consume it at the bar <b><u>at your own expense</u></b>.
                        </Text>
                    </Collapse>
                    <Collapse title="Will you be live streaming your Wedding ceremony?"
                              contentLeft={<NumberCircleSix color="#d6b12a" size={24}/>}
                    >
                        <Text>
                            Yes. Please check back on this website when the live streaming is enabled.
                        </Text>
                    </Collapse>
                    <Collapse title="How can I help the couple have the best time through out their Wedding day?"
                              contentLeft={<NumberCircleSeven color="#d6b12a" size={24}/>}
                    >
                        <Text>
                            Just relax and have a good time! :)
                        </Text>
                    </Collapse>
                    <Collapse title="What's the best way to reach out with additional questions?"
                              contentLeft={<NumberCircleEight color="#d6b12a" size={24}/>}
                    >
                        <Table
                            shadow={false}
                            aria-label="Example table with static content"
                            css={{
                                height: "auto",
                                minWidth: "100%",
                            }}
                        >
                            <Table.Header>
                                <Table.Column>SERVICE</Table.Column>
                                <Table.Column>ACCOUNT</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row key="1">
                                    <Table.Cell>Email</Table.Cell>
                                    <Table.Cell>
                                        <Link to={"mailto:ramshreya210@gmail.com"}>ramshreya210@gmail.com</Link>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row key="2">
                                    <Table.Cell>Instagram</Table.Cell>
                                    <Table.Cell>
                                        <Link to={"https://instagram.com/ramshreya1024"}>@ramshreya1024</Link>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row key="3">
                                    <Table.Cell>Ram</Table.Cell>
                                    <Table.Cell>
                                        <Link to={"tel:+16096473422"}>+1(609) 647-3422</Link>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row key="4">
                                    <Table.Cell>Shreya</Table.Cell>
                                    <Table.Cell>
                                        <Link to={"tel:+16096473422"}>+1(201) 912-7051</Link>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Collapse>
                </Collapse.Group>
            </Grid>
        </Grid.Container>
    </Box>
);