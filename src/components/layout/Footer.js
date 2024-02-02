import { Box, Card, Grid, ListItemButton, ListItemText, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { IconLink } from "../shop/ProductCard"
import someBodyLikeYou from "../asset/somebodyLikeYou.png"

const navigationItems = [
    { path: "/organisation", label: "Organisation" },
    { path: "/partenariats&créateurs", label: "Partenariats / Créateurs" },
    { path: "/billeterie", label: "Billeterie" }
];

const Footer = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const navigationHandler = (target) => {
        setOpen(false);

        if (target === "/billeterie") {
            window.location.href = "https://www.helloasso.com/associations/associationfenetres/evenements/place-defile-somebodylikeyou";
        } else {
            navigate(target);
        }
    };

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

    const fontSizeText = windowWidth < 800 ? "20px" : "40px";
    const fontSizeItem = windowWidth < 800 ? "10px" : "20px";
    const divMargin = windowWidth < 800 ? "23vw" : "17vh";
    const flexDirection = windowWidth < 800 ? "column" : "row";
    const itemHeight = windowWidth < 800 ? "20px" : "0";
    const logoWidth = windowWidth < 800 ? "150px" : "300px"

    return (
        <Card sx={{
            height: '20vh',
            backgroundColor: '#333',
        }}>
            <Grid container sx={{ marginLeft: divMargin, mt: '5vh' }}>
                <Grid item xs={5} >
                    <img src={someBodyLikeYou} style={{ width: logoWidth }}
                        onClick={() => navigationHandler("/accueil")} />
                </Grid>
                <Grid item xs={6} sx={{ pr: '4vh' }}>
                    <Box sx={{ display: "flex", flexDirection: flexDirection, flexWrap: "wrap" }}>
                        {navigationItems.map((item) => (
                            <ListItemButton
                                key={item.path}
                                onClick={() => navigationHandler(item.path)}
                                sx={{
                                    height: itemHeight,
                                    '&:hover': { backgroundColor: 'transparent', },
                                    '&::before': { content: 'none' },
                                }}>
                                <ListItemText
                                    sx={{
                                        '& .MuiListItemText-primary': { fontSize: fontSizeItem, fontWeight: 'bold', color: 'gray' },
                                        '&:hover .MuiListItemText-primary': { color: 'white' }
                                    }}
                                    primary={item.label}
                                />
                            </ListItemButton>
                        ))}
                    </Box>
                </Grid>
                <Box sx={{ width: "80vw", display: "flex", flexDirection: "row" }}>
                    <Grid
                        item xs={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pr: '4vh'
                        }}>
                        <IconLink url={"https://www.instagram.com/somebodylikeyou_2024/"} icon={<InstagramIcon />} />
                    </Grid>
                </Box>
            </Grid>
        </Card >
    );
};

export default Footer;
