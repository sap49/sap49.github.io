import React from "react"
import {Card, Col, Row, Text} from "@nextui-org/react";

export const CustomCard = ({name,title,pic}) => (
    <Card>
        <Card.Image
            src={pic}
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
        />
        <Card.Footer
            css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <Row>
                <Col>
                    <Row justify="flex-end">
                        <Text
                            css={{ color: "white" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            {name}
                        </Text>
                    </Row>
                    <Row justify="flex-end">
                        <Text
                            css={{ color: "white" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            {title}
                        </Text>
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);