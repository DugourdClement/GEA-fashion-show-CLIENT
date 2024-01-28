import React, {useState} from 'react';
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
import {useNavigate} from "react-router-dom";

const navigationItems = [
    {path: "/qui-sommes-nous", label: "Qui sommes-nous ?"},
    {path: "/organisation", label: "Organisation"},
    {path: "/partenariats&créateurs", label: "Partenariats / Créateurs"},
    {path: "/boutique", label: "Boutique"},
    {path: "/billeterie", label: "Billeterie"}
];

const drawerWidth = '51vh';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(prevState => !prevState);
    };

    const navigationHandler = (target) => {
        navigate(target)
        setOpen(false);
    };

    return (
        <>
            <Card
                sx={{
                    width: '15vh',
                    height: '100vh',
                    position: 'fixed',
                    zIndex: 1,
                    backgroundColor: '#F2E1C7',
                    borderTop: 'solid',
                    borderRight: 'solid',
                    borderColor: 'white',
                }}
            >
                <Grid container direction="column" alignItems="center">
                    <Grid item sx={{borderBottom: 'solid', borderColor: 'white'}}>
                        <IconButton onClick={toggleDrawer} sx={{
                            pt: '4vh',
                            pb: '4vh',
                            '&:hover': {backgroundColor: 'transparent'},
                        }}>
                            {!open ? <MenuIcon/> : <CloseIcon/>}
                        </IconButton>
                    </Grid>
                    <Grid item>
                        {!open && <Typography
                            sx={{
                                fontSize: 35,
                                fontWeight: 'bold',
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)',
                                mt: '20vh'
                            }}>
                            Somebody Like You
                        </Typography>}
                    </Grid>
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
                        left: open ? '15vh' : `-${drawerWidth}`,
                        zIndex: 2,
                        boxSizing: 'border-box',
                        backgroundColor: '#F2E1C7',
                        boxShadow: 'none',
                        borderTop: 'solid',
                        borderLeft: 'solid',
                        borderColor: 'white',
                    },
                }}>
                <Typography variant="h4" sx={{ml: '2vh', mt: '10vh', mb: '4vh', fontWeight: 'bold', cursor: 'pointer'}}
                            onClick={() => navigationHandler("/accueil")}>
                    Somebody Like You
                </Typography>
                <List>
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
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
