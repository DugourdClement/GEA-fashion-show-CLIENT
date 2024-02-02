import {
    Box,
    Typography,
    List,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Card
} from "@mui/material";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import imgHomeDefile from "../asset/imgHomeDefile.png"
import flipper from "../asset/flipper.jpg"
import imgHomePreparation from "../asset/imgHomePreparation.jpg"
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import mapMarkerIcon from "../asset/mapmarker.png";


const Home = () => {

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

    const fontSizeText = windowWidth < 800 ? "16px" : "20px";
    const imgWidth = windowWidth < 800 ? "50vw" : "500px";
    const mapWidth = windowWidth < 800 ? "70vw" : "100vh";
    const mapHeight = windowWidth < 800 ? "90vw" : "100vh";
    const bodyMargin = windowWidth < 800 ? "2vh 5vh" : "10vh 0";
    const flexDirection = windowWidth < 800 ? "column" : "row";
    const boxHeight = windowWidth < 800 ? "60vh" : "40vh";

    const customIcon = new L.Icon({
        iconUrl: mapMarkerIcon,
        iconSize: [32, 32],
    });

    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F2E1C7"
        }}>
            <Box sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: `url('${imgHomeDefile}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <Typography sx={{
                    fontSize: "10vw",
                    color: "#fff",
                    fontWeight: "300",
                    fontFamily: "Cookie, cursive",
                }}>
                    Défilé
                </Typography>
                <Typography sx={{
                    fontSize: "10vw",
                    color: "#fff",
                    fontWeight: "600",
                    fontFamily: "Cookie, cursive",
                }}>
                    intergénérationnel
                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                margin: bodyMargin,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: fontSizeText,
                    fontFamily: "Roboto Condensed, sans-serif",
                    margin: "0 15vw"
                }}>
                    Préparez-vous à être éblouis par Somebody Like You, un défilé de mode révolutionnaire prévu pour le
                    15 mars 2024 à 18h30
                    au cœur de Marseille, dans l'emblématique salle de l’espace Bergemon. Ce projet exceptionnel monté
                    par des étudiants de
                    l’IUT d’Aix-en-Provence relève le défi de mêler harmonieusement les générations à travers la mode.
                    Imaginez des jeunes
                    talents créatifs partageant la scène avec des mannequins séniors, vibrez au rythme d'une fusion
                    intergénérationnelle de
                    styles, le tout orchestré par un DJ électrisant et d’autres intervenants.
                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                padding: "20vh 0",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url('${flipper}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: fontSizeText,
                    fontWeight: "600",
                    color: "#F2E1C7",
                    fontFamily: "Roboto Condensed, sans-serif",
                    margin: "0 15vw"
                }}>
                    Face à ce défi technique colossal, nous avons pris les rênes de la création en main, construisant
                    chaque élément de cet
                    événement novateur en un temps record. Nous avons recherché activement une salle emblématique,
                    trouver des stylistes innovants,
                    des mannequins sortant de l'ordinaire, de nombreux partenaires… qui nous ont tous aidé à construire
                    ce projet.
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
                <img
                    style={{
                        width: imgWidth,
                        marginBottom: "40px"
                    }}
                    src={imgHomePreparation} />
                <Typography sx={{
                    textAlign: "center",
                    fontSize: fontSizeText,
                    fontFamily: "Roboto Condensed, sans-serif",
                    margin: "0 20vw",
                }}>
                    Somebody Like You est bien plus qu'un défilé de mode. C'est une déclaration d'unité, une célébration
                    de l'authenticité, et un
                    témoignage de la beauté intemporelle présente à chaque étape de la vie. Rejoignez-nous dans cette
                    aventure exaltante où la
                    mode devient le reflet éclatant de notre diversité, unissant les générations dans un élan de style
                    et d'innovation.
                </Typography>
            </Box>
            <Box sx={{
                width: "100%",
                height: boxHeight,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#f7f7f7",
            }}>
                <List sx={{ width: '50vw', backgroundColor: '#fff' }}>
                    <Box sx={{
                        margin: "2vh",
                        display: "flex",
                        flexDirection: flexDirection,
                        alignItems: "center"
                    }}>
                        <ListItemAvatar>
                            <Avatar>
                                <LocationOnIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "80px" }} primary="Lieu" secondary="Espace Bargemon" />
                        <ListItemAvatar>
                            <Avatar>
                                <DateRangeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "80px" }} primary="Date" secondary="15 Mars" />
                    </Box>
                    <Box sx={{
                        margin: "2vh",
                        display: "flex",
                        flexDirection: flexDirection,
                        alignItems: "center"
                    }}>
                        <ListItemAvatar>
                            <Avatar>
                                <WatchLaterIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "80px" }} primary="Début" secondary="18h30" />
                        <ListItemAvatar>
                            <Avatar>
                                <QueryBuilderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "80px" }} primary="Fin" secondary="22h30" />
                    </Box>
                </List>
            </Box>
            <Box sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#f7f7f7",
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
                <Card sx={{ height: mapHeight, width: mapWidth, mb: '5vh' }}>
                    <MapContainer center={[43.297042433176244, 5.370310174049631]} zoom={13} scrollWheelZoom={false}
                        style={{ height: '100%', width: '100%', padding: '2vh' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[43.297042433176244, 5.370310174049631]} icon={customIcon}>
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

export default Home;
