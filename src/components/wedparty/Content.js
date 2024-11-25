import React from "react"
import {Text, Grid} from "@nextui-org/react"
import {Box} from "../shared/Box"
import "material-symbols";
import {CustomCard} from "../shared/CustomCard";

export const Content = ({user}) => (
    <Box css={{px: "30%", pt: "3.5%", w: "100%", "@xsMax": {px: "$10"}}}>
        <Text h1>Wedding Squad</Text>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={4}>
                <CustomCard name={"PARTHASARATHY CHAKRAVARTHY"} title={"FATHER OF THE GROOM"} pic={process.env.PUBLIC_URL+"/party/ajay.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"SAVITHRI PARTHASARATHY"} title={"MOTHER OF THE GROOM"} pic={process.env.PUBLIC_URL+"/party/ajay.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"AJAY PARTHASARATHY"} title={"BROTHER OF THE GROOM/BEST MAN"} pic={process.env.PUBLIC_URL+"/party/ajay.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"ALKESH PATEL"} title={"FATHER OF THE BRIDE"} pic={process.env.PUBLIC_URL+"/party/ajay.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"ANAR PATEL"} title={"MOTHER OF THE BRIDE"} pic={process.env.PUBLIC_URL+"/party/ajay.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"DEV PATEL"} title={"BROTHER OF THE BRIDE"} pic={process.env.PUBLIC_URL+"/party/ajay.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"HARAN NALLASIVAN"} title={"BEST MAN"} pic={process.env.PUBLIC_URL+"/party/haran.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"BEN YAN"} title={"GROOMSMAN"} pic={process.env.PUBLIC_URL+"/party/ben.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"RAUNAK PADORE"} title={"GROOMSMAN"} pic={process.env.PUBLIC_URL+"/party/raunak.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"AVI BAGCHI"} title={"GROOMSMAN"} pic={process.env.PUBLIC_URL+"/party/avi.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"STUTI PATEL"} title={"MAID OF HONOR"} pic={process.env.PUBLIC_URL+"/party/stuti.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"SHILPI PATEL"} title={"MAID OF HONOR"} pic={process.env.PUBLIC_URL+"/party/shilpi.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"JUEE MEHTA"} title={"MATRON OF HONOR"} pic={process.env.PUBLIC_URL+"/party/juee.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"SUHANI PATEL"} title={"BRIDESMAID"} pic={process.env.PUBLIC_URL+"/party/suhani_crop.png"}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CustomCard name={"HITU PATEL"} title={"BRIDESMAID"} pic={process.env.PUBLIC_URL+"/party/hitu.png"}/>
            </Grid>
            {
                /*<Grid xs={12} sm={4}>
                    <CustomCard name={"TANAY PATEL"} title={"FLOWER BOY"} pic={process.env.PUBLIC_URL+"/party/avi.png"}/>
                </Grid>*/
            }
        </Grid.Container>
    </Box>
);