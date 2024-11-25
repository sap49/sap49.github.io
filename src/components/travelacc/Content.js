import React from "react"
import {Text, Grid, Collapse, Link, Spacer, Image} from "@nextui-org/react"
import {Box} from "../shared/Box"
import "material-symbols";

export const Content = ({user}) => (
    <Box css={{px: "30%", pt: "3.5%", "@xsMax": {px: "$10"}}}>
        
        <Text h1>Travel & Accomodations</Text>
        <Grid.Container gap={2}>
            <Grid>
                <Collapse.Group shadow>
                    <Collapse title="Getting In" arrowIcon={
                        <span className="material-symbols-outlined">flight_land</span>
                    }>
                        <Text>
                            We recommend flying into the Newark Liberty International Airport!
                        </Text>
                        <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2934001258154!2d-74.17665108435983!3d40.6895354469262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c252e1c5ec0cef%3A0xb3f3b437c5d7f286!2sNewark%20Liberty%20International%20Airport!5e0!3m2!1sen!2sus!4v1657448057785!5m2!1sen!2sus"
                                width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" title={"EWR"}
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Collapse>
                    <Collapse title="Your Stay" arrowIcon={
                        <span className="material-symbols-outlined">hotel</span>
                    }>
                        <Text>Delta Hotels by Marriott Somerset</Text>
                        <Text>110 Davidson Avenue, Somerset, NJ, USA</Text>
                        <Link to={"tel:+17325600500"}>+1(732) 560-0500</Link>
                        <Spacer y={0.5}/>
                        <Image src={process.env.PUBLIC_URL+"/hotel.jpeg"}></Image>
                        <Spacer y={0.5}/>
                        <iframe className="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.043057996749!2d-74.5206813843632!3d40.54063785601788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c1f5720ccb4d%3A0x2c7051eca3dcf8ef!2sDelta%20Hotels%20by%20Marriott%20Somerset!5e0!3m2!1sen!2sus!4v1657448177124!5m2!1sen!2sus"
                                width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" title={"DHMS"}
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Collapse>
                    <Collapse title="Parking" arrowIcon={
                        <span className="material-symbols-outlined">local_parking</span>
                    }>
                        <Text>Complimentary parking is provided at Delta Hotels by Marriott Somerset.</Text>
                    </Collapse>
                </Collapse.Group>
            </Grid>
        </Grid.Container>
    </Box>
);