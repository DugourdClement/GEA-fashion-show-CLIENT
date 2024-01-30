import { Card, Grid, ListItemButton, ListItemText, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";
import { useNavigate } from "react-router-dom";

const navigationItems = [
    { path: "/organisation", label: "Organisation" },
    { path: "/partenariats&créateurs", label: "Partenariats / Créateurs" },
    { path: "/billeterie", label: "Billeterie" }
];

const Footer = () => {
    const navigate = useNavigate();

    const navigationHandler = (target) => {
        navigate(target)
    };

    return (
        <Card sx={{
            height: '20vh',
            backgroundColor: '#333',
            borderTop: 'solid',
            borderColor: 'white',
        }}>
            <Grid container sx={{ ml: '23vh', mt: '5vh' }}>
                <Grid item xs={5} >
                    <Typography sx={{ fontSize: 35, color: '#fff', fontFamily: "Cookie, cursive", fontWeight: 'bold', cursor: 'pointer', mb: '1vh' }}
                        onClick={() => navigationHandler("/accueil")}>
                        Somebody Like You
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ pr: '4vh' }}>
                    <Grid container direction="row" spacing={2}>
                        {navigationItems.map((item) => (
                            <ListItemButton
                                key={item.path}
                                onClick={() => navigationHandler(item.path)}
                                sx={{
                                    '&:hover': { backgroundColor: 'transparent', },
                                    '&::before': { content: 'none' },
                                }}>
                                <ListItemText
                                    sx={{
                                        '& .MuiListItemText-primary': { fontSize: 20, fontWeight: 'bold', color: 'gray' },
                                        '&:hover .MuiListItemText-primary': { color: 'white' }
                                    }}
                                    primary={item.label}
                                />
                            </ListItemButton>
                        ))}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={9}>
                        <Typography sx={{
                            color: "#fff"
                        }}>Contacts à ajouter</Typography>
                    </Grid>
                    <Grid
                        item xs={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pr: '4vh'
                        }}>
                        <InstagramIcon sx={{ transform: 'scale(1.2)', color: "#fff" }} />
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Footer;
