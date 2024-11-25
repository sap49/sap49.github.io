import CustomNavBar from "../shared/CustomNavBar";
import {UserAuth} from "../../context/AuthContext";

import React from "react";
import Helmet from "react-helmet";
import {Box} from "../shared/Box";

import {Button, Input, Radio, Spacer, Text} from "@nextui-org/react";
import ProtectedEvent from "../security/ProtectedEvent";


export default function RSVP() {
    const {user, logout, userData} = UserAuth();

    const [checkedSH, setCheckedSH] = React.useState('No');
    const [checkedSM, setCheckedSM] = React.useState('No');
    const [checkedRM, setCheckedRM] = React.useState('No');
    const [checkedSG, setCheckedSG] = React.useState('No');
    const [checkedWC, setCheckedWC] = React.useState('No');


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
                   `}
                </style>
            </Helmet>

            <Box
                css={{
                    maxW: "100%"
                }}
            >
                <CustomNavBar user={user}/>
                <Box css={{px: "30%", pt: "3.5%", "@xsMax": {px: "$10"}}}>
                    <Text h1>RSVP Form</Text>
                    <form>
                        <ProtectedEvent event={"haldi"} userData={userData}>
                            <Text id={"question"} size={20} b>Indicate if you will be able to attend Shreya's
                                Haldi.*</Text>
                            <Radio.Group orientation="horizontal" value={checkedSH} onChange={setCheckedSH}>
                                <Radio value="primary" size={"md"}>
                                    Yes
                                </Radio>
                                <Radio value="secondary" size={"md"}>
                                    No
                                </Radio>
                            </Radio.Group>
                            <Spacer y={0.5}/>
                            <Text id={"follow-up"} size={20} b>If attending, how many people are able to attend ?*</Text>
                            <Spacer y={0.1}/>
                            <Input
                                underlined
                                clearable
                                placeholder="0"
                            />
                            <Spacer y={0.5}/>
                            <hr/>
                            <Spacer y={0.5}/>
                        </ProtectedEvent>
                        <ProtectedEvent event={"mehndi_bride"} userData={userData}>
                            <Text id={"question"} size={20} b>Indicate if you will be able to attend Shreya's Mehndi
                                ?*</Text>
                            <Radio.Group orientation="horizontal" value={checkedSM} onChange={setCheckedSM}>
                                <Radio value="primary" size={"md"}>
                                    Yes
                                </Radio>
                                <Radio value="secondary" size={"md"}>
                                    No
                                </Radio>
                            </Radio.Group>
                            <Spacer y={0.5}/>
                            <Text id={"follow-up"} size={20} b>If attending, how many people are able to attend ?*</Text>
                            <Spacer y={0.1}/>
                            <Input
                                underlined
                                clearable
                                placeholder="0"
                            />
                            <Spacer y={0.5}/>
                            <hr/>
                            <Spacer y={0.5}/>
                        </ProtectedEvent>
                        <ProtectedEvent event={"mehndi_groom"} userData={userData}>
                            <Text id={"question"} size={20} b>Indicate if you will be able to attend Ram's Mehndi
                                ?*</Text>
                            <Radio.Group orientation="horizontal" value={checkedRM} onChange={setCheckedRM}>
                                <Radio value="primary" size={"md"}>
                                    Yes
                                </Radio>
                                <Radio value="secondary" size={"md"}>
                                    No
                                </Radio>
                            </Radio.Group>
                            <Spacer y={0.5}/>
                            <Text id={"follow-up"} size={20} b>If attending, how many people are able to attend ?*</Text>
                            <Spacer y={0.1}/>
                            <Input
                                underlined
                                clearable
                                placeholder="0"
                            />
                            <Spacer y={0.5}/>
                            <hr/>
                            <Spacer y={0.5}/>
                        </ProtectedEvent>
                        <ProtectedEvent event={"sangeet"} userData={userData}>
                            <Text id={"question"} size={20} b>Indicate if you will be able to attend our Sangeet
                                ?*</Text>
                            <Radio.Group orientation="horizontal" value={checkedSG} onChange={setCheckedSG}>
                                <Radio value="primary" size={"md"}>
                                    Yes
                                </Radio>
                                <Radio value="secondary" size={"md"}>
                                    No
                                </Radio>
                            </Radio.Group>
                            <Spacer y={0.5}/>
                            <Text id={"follow-up"} size={20} b>If attending, how many people are able to attend ?*</Text>
                            <Spacer y={0.1}/>
                            <Input
                                underlined
                                clearable
                                placeholder="0"
                            />
                            <Spacer y={0.5}/>
                            <hr/>
                            <Spacer y={0.5}/>
                        </ProtectedEvent>
                        <ProtectedEvent event={"baraat"} userData={userData}>
                            <Text id={"question"} size={20} b>Indicate if you will be able to attend Ram's Baraat
                                ?*</Text>
                            <Radio.Group orientation="horizontal" value={checkedWC} onChange={setCheckedWC}>
                                <Radio value="primary" size={"md"}>
                                    Yes
                                </Radio>
                                <Radio value="secondary" size={"md"}>
                                    No
                                </Radio>
                            </Radio.Group>
                            <Spacer y={0.5}/>
                            <Text id={"follow-up"} size={20} b>If attending, how many people are able to attend ?*</Text>
                            <Spacer y={0.1}/>
                            <Input
                                underlined
                                clearable
                                placeholder="0"
                            />
                            <Spacer y={0.5}/>
                            <hr/>
                            <Spacer y={0.5}/>
                        </ProtectedEvent>
                        <ProtectedEvent event={"wedding"} userData={userData}>
                            <Text id={"question"} size={20} b>Indicate if you will be able to attend our Wedding
                                Ceremony ?*</Text>
                            <Radio.Group orientation="horizontal">
                                <Radio value="primary" size={"md"}>
                                    Yes
                                </Radio>
                                <Radio value="secondary" size={"md"}>
                                    No
                                </Radio>
                            </Radio.Group>
                            <Spacer y={0.5}/>
                            <Text id={"follow-up"} size={20} b>If attending, how many people are able to attend ?*</Text>
                            <Spacer y={0.1}/>
                            <Input
                                underlined
                                clearable
                                placeholder="0"
                            />
                        </ProtectedEvent>
                        <Spacer y={0.5}/>
                        <hr/>
                        <Spacer y={0.5}/>
                        <Button size={"sm"} type="submit"
                                css={{backgroundImage: '$primaryLight', width: '100%'}}>Submit</Button>
                        <Spacer y={1}/>
                    </form>
                </Box>
            </Box>
        </React.Fragment>
    )
}