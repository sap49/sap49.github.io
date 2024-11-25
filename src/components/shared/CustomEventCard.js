import React from "react"
import {Card, Col, Row, Text} from "@nextui-org/react";
import {Clock, MapPin} from "react-feather";
import {If} from "./If";

export const CustomEventCard = ({title, description, dressCode=null, location, time, color}) => (
    <Card css={{bg: color, mw: "400px"}}>
        <Card.Header>
            <Text b color={"white"}>{title}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
            <If condition={!dressCode}>
                <Text css={{pb: "12%"}} color={"white"}>{description}</Text>
            </If>
            <If condition={dressCode}>
                <Text color={"white"}>{description}</Text>
                <Text css={{pb: "12%"}} color={"white"} i>{dressCode}</Text>
            </If>

        </Card.Body>
        <Card.Footer
            css={{
                position: "absolute",
                bgBlur: "#0f111466",

                bottom: 0,
                zIndex: 1,
            }}
        >
            <Row>
                <Col>
                    <Row justify="flex-start">
                        <MapPin strokeWidth={1.5} size={18} color={"white"}/>
                        <Text
                            css={{color: "white"}}
                            size={14}
                            weight="bold"
                        >
                             {'\u00A0' + location}
                        </Text>
                    </Row>
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <Clock strokeWidth={1.5} size={18} color={"white"} />
                        <Text
                            css={{color: "white"}}
                            size={14}
                            weight="bold"
                            transform="uppercase"
                        >
                            {'\u00A0' + time}
                        </Text>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);