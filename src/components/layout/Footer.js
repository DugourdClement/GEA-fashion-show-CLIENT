import {Card, Grid, ListItemButton, ListItemText, Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";
import {useNavigate} from "react-router-dom";

const navigationItems = [
    {path: "/organisation", label: "Organisation"},
    {path: "/partenariats&créateurs", label: "Partenariats / Créateurs"},
    {path: "/billeterie", label: "Billeterie"}
];

const Footer = () => {
    const navigate = useNavigate();

    const navigationHandler = (target) => {
        navigate(target)
    };

    return (
        <Card sx={{
            height: '35vh',
            backgroundColor: '#F2E1C7',
            borderTop: 'solid',
            borderColor: 'white',
        }}>
            <Grid container sx={{ml: '23vh', mt: '5vh'}}>
                <Grid item xs={5} sx={{borderBottom: 'solid', borderColor: 'white'}}>
                    <Typography sx={{fontSize: 35, fontWeight: 'bold', cursor: 'pointer', mb: '1vh'}}
                                onClick={() => navigationHandler("/accueil")}>
                        Somebody Like You
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{borderBottom: 'solid', borderColor: 'white', pr: '4vh'}}>
                    <Grid container direction="row" spacing={2}>
                        {navigationItems.map((item) => (
                            <ListItemButton
                                key={item.path}
                                onClick={() => navigationHandler(item.path)}
                                sx={{
                                    '&:hover': {backgroundColor: 'transparent',},
                                    '&::before': {content: 'none'},
                                }}>
                                <ListItemText
                                    sx={{
                                        '& .MuiListItemText-primary': {fontSize: 28, fontWeight: 'bold', color: 'gray'},
                                        '&:hover .MuiListItemText-primary': {color: 'white'}
                                    }}
                                    primary={item.label}
                                />
                            </ListItemButton>
                        ))}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={9}>
                        <Typography>Contacts à ajouter</Typography>
                    </Grid>
                    <Grid
                        item xs={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pt: '5vh',
                            pr: '4vh'
                        }}>
                        <InstagramIcon sx={{transform: 'scale(1.5)'}}/>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Footer;
