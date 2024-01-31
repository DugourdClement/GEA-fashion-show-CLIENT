import React from 'react';
import {
    Box,
    Typography,
    List, ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar, Card,
} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import espaceBargemon from "../components/asset/espaceBargemon.jpg"
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const EventDetails = () => {
    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Box sx={{
                padding: "10vh 0 5vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Typography sx={{
                    margin: "0 15vw",
                    fontSize: "6em",
                    fontWeight: "300",
                    color: "#000",
                    lineHeight: "86px",
                    fontFamily: "Cookie, cursive",
                }}>
                    Organisation
                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                padding: "10vh 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF"
            }}>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontFamily: "Roboto Condensed, sans-serif",
                    margin: "0 15vw"
                }}>
                    Rejoignez nous pour le défilé de mode, le <b>15 mars</b> prochain.
                    L'événement se tiendra de <b>18h30 à 22h30</b> à <b>l'Espace Bargemon</b>, situé au cœur de la Rue
                    de la Guirlande, 13002 Marseille.

                    <b>Une dizaine de créateurs</b> talentueux présenteront leurs collections exceptionnelles sur
                    une <b>cinquantaine de modèles</b>.
                    Emerveillez vous devant les parade des modèles , représentant la diversité sous toutes ses formes.

                    Pour ceux qui aspirent à l'innovation et à l'entrepreneuriat dans le monde de la mode, le <b>Village
                    de l'Entrepreneur</b> ouvrira
                    ses portes dès <b>18h30</b>. Faites une pause gourmande et régalez vous avec notre <b>buffet</b> à
                    partir de <b>21h</b>.

                    Réservez dès maintenant pour une soirée mémorable !
                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                padding: "5vh 0 10vh",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                background: "#f7f7f7",
            }}>
                <List sx={{width: '100%', maxWidth: 360}}>
                    <Typography sx={{
                        fontSize: "1.5em",
                        fontWeight: "300",
                        lineHeight: "86px",
                        fontFamily: "Roboto Condensed, sans-serif",
                    }}>
                        Planning
                    </Typography>
                    <ListItem sx={{width: "400px"}}>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{width: "200px"}} primary="18h" secondary="Début de l'évènement"/>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{width: "200px"}} primary="21h" secondary="Fin du défilé"/>
                    </ListItem>
                    <ListItem sx={{width: "400px"}}>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{width: "200px"}} primary="19h" secondary="Tombola"/>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{width: "200px"}} primary="21h30" secondary="Annonce du lot et du gagant"/>
                    </ListItem>
                    <ListItem sx={{width: "400px"}}>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{width: "200px"}} primary="20h" secondary="Début du défilé"/>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{width: "200px"}} primary="22h" secondary="Fin de l'évènement"/>
                    </ListItem>
                </List>
                <img src={espaceBargemon} style={{width: "400px"}}/>
            </Box>
            <Box sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Typography
                    variant='h5'
                    sx={{
                        fontSize: "1.5em",
                        fontWeight: "300",
                        lineHeight: "86px",
                        fontFamily: "Roboto Condensed, sans-serif",
                    }}>
                    Plan d'accès</Typography>
                <Card fullWidth sx={{height: '100vh', width: '100vh', mb: '5vh'}}>
                    <MapContainer center={[43.297042433176244, 5.370310174049631]} zoom={13} scrollWheelZoom={false}
                                  style={{height: '100%', width: '100%', padding: '2vh'}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[43.297042433176244, 5.370310174049631]}>
                            <Popup>
                                Espace Bargemon, Marseille
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Card>
            </Box>
        </Box>
    );
};

export default EventDetails;