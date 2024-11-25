import React from "react";
import {Navbar, Button, Link, Image, Modal, useTheme, Text, Checkbox, Radio} from "@nextui-org/react"
import {Bookmark, Youtube} from "react-feather";

export default function CustomNavBar({user}) {

    const collapseItems = [
        {
            "title": "Our Story",
            "link": "/story"
        },
        {
            "title": "Festivities",
            "link": "/festivities"
        },
        {
            "title": "Wedding Squad",
            "link": "/wedparty"
        },
        {
            "title": "Travel & Accommodations",
            "link": "/travelacc"
        },
        {
            "title": "FAQs",
            "link": "/faq"
        }
    ];

    const {theme} = useTheme();

    return (
        <React.Fragment>
            <Navbar isBordered isCompact maxWidth={"fluid"}>
                <Navbar.Toggle showIn="xs"/>
                <Navbar.Brand>
                    <Link href="/home">
                        <Image
                            width={60}
                            height={60}
                            src={process.env.PUBLIC_URL + "/logos/logo.png"}
                            alt="RS Logo"
                            objectFit="cover"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"underline"}>
                    <Navbar.Link isActive={window.location.pathname === '/story'} href="/story">Our Story</Navbar.Link>
                    <Navbar.Link isActive={window.location.pathname === '/festivities'}
                                 href="/festivities">Festivities</Navbar.Link>
                    <Navbar.Link isActive={window.location.pathname === '/wedparty'} href="/wedparty">Wedding
                        Squad</Navbar.Link>
                    <Navbar.Link isActive={window.location.pathname === '/travelacc'} href="/travelacc">Travel &
                        Accommodations</Navbar.Link>
                    <Navbar.Link isActive={window.location.pathname === '/faq'} href="/faq">FAQs</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        <>
                            <Button auto as={Link} css={{backgroundColor: "$primaryLight"}}
                                    icon={<Bookmark strokeWidth={1.5} size={18}/>} size="sm" href="/rsvp">
                                RSVP
                            </Button>
                        </>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Button auto disabled as={Link} css={{backgroundColor: "$primaryLight"}}
                                icon={<Youtube strokeWidth={1.5} size={18}/>} size="sm" href="#">
                            LIVE STREAM
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
                <Navbar.Collapse id={"menu"}>
                    {collapseItems.map((page, index) => (
                        <Navbar.CollapseItem
                            key={page.title}
                            activeColor="primary"
                            css={{
                                color: "$primary"
                            }}
                            isActive={window.location.path === page.link}
                        >

                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href={page.link}
                            >
                                {page.title}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}