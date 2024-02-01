import React, { useState, useEffect } from 'react';
import {
    Drawer,
    List,
    ListItemText,
    IconButton,
    ListItemButton,
    Typography, Card, Grid
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const navigationItems = [
    { path: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
    { path: "/organisation", label: "Organisation" },
    { path: "/partenariats&créateurs", label: "Partenariats / Créateurs" },
    { path: "/boutique", label: "Boutique" },
    { path: "/billeterie", label: "Billeterie" },
    { path: "/connection", label: "Je travail ici" },
];

const drawerWidth = '51vh';

const Sidebar = () => {

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

    const sidebarWidth = windowWidth < 800 ? "20vw" : "15vh";

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(prevState => !prevState);
    };

    const navigationHandler = (target) => {
        setOpen(false);

        if (target === "/billeterie") {
            window.location.href = "https://www.helloasso.com/associations/associationfenetres/evenements/place-defile-somebodylikeyou";
        } else {
            navigate(target);
        }
    };

    return (
        <>
            <Card
                sx={{
                    width: sidebarWidth,
                    height: '100vh',
                    position: 'fixed',
                    zIndex: 1,
                    backgroundColor: '#333',
                    border: "none",
                    borderRadius: "0",
                    boxShadow: ' 1px 0 10px 0 #000'
                }}
            >
                <Grid container direction="column" alignItems="center">
                    <Grid item sx={{ borderBottom: 'solid', borderColor: 'white' }}>
                        <IconButton onClick={toggleDrawer} sx={{
                            pt: '4vh',
                            pb: '4vh',
                            '&:hover': { backgroundColor: 'transparent' },
                        }}>
                            {!open ? <MenuIcon sx={{ color: "#fff" }} /> : <CloseIcon sx={{ color: "#fff" }} />}
                        </IconButton>
                    </Grid>
                    {!open && <Typography
                        sx={{
                            fontSize: 35,
                            color: "#fff",
                            fontWeight: 'bold',
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            fontFamily: "Cookie, cursive",
                            mt: '20vh',
                            cursor: "default"
                        }}>
                        Somebody Like You
                    </Typography>}
                </Grid>
            </Card>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer}
                variant="temporary"
                ModalProps={{
                    BackdropProps: {
                        invisible: true,
                    }
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        position: 'relative',
                        left: open ? sidebarWidth : `-${drawerWidth}`,
                        zIndex: 2,
                        boxSizing: 'border-box',
                        backgroundColor: '#333',
                        boxShadow: 'none',
                    },
                }}>
                <Typography variant="h4" sx={{ color: "#fff", fontFamily: "Cookie, cursive", ml: '2vh', mt: '10vh', mb: '4vh', fontWeight: 'bold', cursor: 'pointer' }}
                    onClick={() => navigationHandler("/accueil")}>
                    Somebody Like You
                </Typography>
                <List>
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
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
