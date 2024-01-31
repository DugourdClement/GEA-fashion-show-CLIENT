import React from 'react';
import {
    Box,
    Grid,
    Typography,
    List, ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Collapse
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import espaceBargemon from "../components/asset/espaceBargemon.jpg"

const EventDetails = () => {

    const faqData = [
        { question: 'Question 1', answer: 'Réponse à la question 1' },
        { question: 'Question 2', answer: 'Réponse à la question 2' },
        { question: 'Question 3', answer: 'Réponse à la question 3' },
        { question: 'Question 4', answer: 'Réponse à la question 4' },
        { question: 'Question 5', answer: 'Réponse à la question 5' },
        { question: 'Question 6', answer: 'Réponse à la question 6' },
    ];

    const [expanded, setExpanded] = React.useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                    L'événement se tiendra de <b>18h30 à 22h30</b> à <b>l'Espace Bargemon</b>, situé au cœur de la Rue de la Guirlande, 13002 Marseille.

                    <b>Une dizaine de créateurs</b> talentueux présenteront leurs collections exceptionnelles sur une <b>cinquantaine de modèles</b>.
                    Emerveillez vous devant les parade des modèles , représentant la diversité sous toutes ses formes.

                    Pour ceux qui aspirent à l'innovation et à l'entrepreneuriat dans le monde de la mode, le <b>Village de l'Entrepreneur</b> ouvrira
                    ses portes dès <b>18h30</b>. Faites une pause gourmande et régalez vous avec notre <b>buffet</b> à partir de <b>21h</b>.

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
                <List sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography sx={{
                        fontSize: "1.5em",
                        fontWeight: "300",
                        lineHeight: "86px",
                        fontFamily: "Roboto Condensed, sans-serif",
                    }}>
                        Planning
                    </Typography>
                    <ListItem sx={{ width: "400px" }}>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "200px" }} primary="18h" secondary="Début de l'évènement" />
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "200px" }} primary="21h" secondary="Fin du défilé" />
                    </ListItem>
                    <ListItem sx={{ width: "400px" }}>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "200px" }} primary="19h" secondary="Tombola" />
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "200px" }} primary="21h30" secondary="Annonce du lot et du gagant" />
                    </ListItem>
                    <ListItem sx={{ width: "400px" }}>
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "200px" }} primary="20h" secondary="Début du défilé" />
                        <ListItemAvatar>
                            <Avatar>
                                <RadioButtonUncheckedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{ width: "200px" }} primary="22h" secondary="Fin de l'évènement" />
                    </ListItem>
                </List>
                <img src={espaceBargemon} style={{ width: "400px" }} />
            </Box>
            <Box sx={{
                width: "100%",
                padding: "5vh 0 10vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>
                {faqData.map((faq, index) => (

                    <Accordion expanded={expanded === `panel${index}`} onChange={handleAccordionChange(`panel${index}`)} sx={{ width: '100%' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Collapse in={expanded === `panel${index}`}>
                                <Typography>{faq.answer}</Typography>
                            </Collapse>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
};

export default EventDetails;