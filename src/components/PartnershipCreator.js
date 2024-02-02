import { useState, useEffect } from "react";
import { Box, Card, CardMedia, Divider, Grid, Typography } from "@mui/material";
import domus from "../components/asset/domus.png";
import associationFenetres from "../components/asset/associationFenetres.png";
import lauralba from "../components/asset/lauralba.png";
import lepopee from "../components/asset/lepopee.png";
import medinsoft from "../components/asset/medinsoft.png";
import olympicLocation from "../components/asset/olympicLocation.png";
import studioKaroDanse from "../components/asset/studioKaroDanse.png";
import theCamp from "../components/asset/theCamp.png";
import iutInfoAix from "../components/asset/iutInfoAix.jpg";
import laCalade from "../components/asset/LaCalade.jpg";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { IconLink } from "./shop/ProductCard";
import createur from "../components/asset/createur.png"
import partenaire from "../components/asset/partenaire.png"

const partnerData = [
    { image: domus, name: 'Ehpad Domus Vi' },
    { image: associationFenetres, name: 'Association FenêtreS' },
    { image: lauralba, name: 'Lauralba' },
    { image: lepopee, name: 'L\épopée' },
    { image: medinsoft, name: 'Medinsoft' },
    { image: olympicLocation, name: 'Olympic Location' },
    { image: studioKaroDanse, name: 'Studio KA.RO Danse' },
    { image: theCamp, name: 'The Camp' },
    { image: iutInfoAix, name: 'IUT Informatique Aix-en-Provence' },
];

const PartnershipCreator = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const titleSize = windowWidth < 800 ? "150px" : "300px"
    const imgWidth = windowWidth < 800 ? "20vw" : "50%";
    const fontSizeTitle = windowWidth < 800 ? "16px" : "30px";
    const dividerDisplay = windowWidth < 800 ? "none" : "default";
    const marginTitle = windowWidth < 800 ? "0" : "0 40px"

    return (
        <>
            <Box sx={{
                width: "100%",
                padding: "10vh 0 5vh",
                display: "flex",
                flexDirection: "column",
                alignItems: 'center'
            }}>
                <img style={{ width: titleSize }} src={createur} />
            </Box>
            <Box sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
            }}>
                {partnerData.map((partner) => (
                    <Card
                        sx={{
                            margin: '5vh',
                            p: '3vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50vh',
                            height: '50vh'
                        }}
                    >
                        <img src={partner.image} style={{ height: imgWidth }} alt={partner.name} />
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: '20px',
                                fontFamily: 'Roboto Condensed, sans-serif',
                                mb: '2vh'
                            }}
                        >
                            {partner.name}
                        </Typography>
                    </Card>
                ))}
            </Box>
            <Box sx={{
                width: "100%",
                padding: "10vh 0 5vh",
                display: "flex",
                flexDirection: "column",
                alignItems: 'center'
            }}>
                <img style={{ width: titleSize }} src={partenaire} />
            </Box>
            <Card sx={{ p: '2vh', mb: '3vh', ml: '7vh', mr: '7vh' }}>
                <Grid container sx={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'center', flexWrap: "wrap" }}>
                    <Grid item sx={{ ml: '4vh' }}>
                        <Typography sx={{ fontSize: fontSizeTitle, margin: "0 40px" }}>1</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Divider orientation="vertical" sx={{ display: dividerDisplay, height: '50px', bgcolor: 'primary.main' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={{
                            fontSize: fontSizeTitle,
                            margin: marginTitle
                        }}>Lycée La Calade</Typography>
                    </Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: "20px" }}>
                        <Grid container justifyContent='space-around'>
                            <IconLink url='instagram lien' icon={<InstagramIcon />} />
                            <IconLink url='facebook lien' icon={<FacebookIcon />} />
                            <IconLink url='pinterest lien' icon={<PinterestIcon />} />
                        </Grid>
                    </Box>
                    <Grid item xs={7} sm={7}>
                        <CardMedia
                            sx={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                            component="img"
                            image={laCalade}
                            alt='Lycée La Calade'
                        />
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default PartnershipCreator;
