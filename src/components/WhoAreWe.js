import { Box, Typography } from "@mui/material";
import logoQuiSommesNous from "../components/asset/logoQuiSommesNous.png"
import previousEdition from "../components/asset/previousEdition.png"
import React, { useState, useEffect } from 'react';


const WhoAreWe = () => {

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

    const flexDirection = windowWidth < 1300 ? "column" : "row";
    const titleMargin = windowWidth < 800 ? "5vw 20vw" : "5vh 30vh 10vh 20vh"
    const bodyMargin = windowWidth < 800 ? "0 10vh" : "5vh 30vh 10vh 20vh"
    const titleSize = windowWidth < 800 ? "4em" : "6em"
    const fontSizeText = windowWidth < 800 ? "16px" : "20px";
    const marginRight = windowWidth < 1300 ? "0" : "5vw"
    const imgWidth = windowWidth < 800 ? "50vw" : "300px";

    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <Box sx={{
                margin: titleMargin,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Typography sx={{
                    fontSize: titleSize,
                    fontWeight: "300",
                    lineHeight: "86px",
                    fontFamily: "Cookie, cursive",
                }}>
                    Qui sommes nous ?
                </Typography>
            </Box>
            <Box sx={{
                margin: bodyMargin,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Typography sx={{
                    fontSize: "1.5em",
                    fontWeight: "300",
                    fontFamily: "Roboto Condensed, sans-serif",
                    marginBottom: "2vh",
                }}>
                    Description de l'évènement :
                </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: flexDirection,
                    alignItems: "center"
                }}>
                    <Typography sx={{
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontSize: fontSizeText,
                        lineHeight: "25px",
                        marginRight: marginRight,
                        marginBottom: "5vh",
                        textAlign: "justify"
                    }}>
                        Ce défilé est un projet de fin d’année des étudiants en deuxième année du BUT (Bachelor Universitaire de Technologie)
                        GEA (Gestion des Entreprises et des Administrations).

                        Les étudiants des quatre parcours différents se sont réunis pour créer un défilé unique en son genre.
                        Les thèmes de ce dernier sont l’intergénérationnel et le mélange.

                        Divers pôles ont été conçus avec notamment les pôles stylisme, événementiel, financement, coordination ou encore un pôle
                        concernant le site Internet. Le pôle stylisme a contacté des créateurs qui présenteront leur collection sur des mannequins
                        choisis (du plus jeune au plus âgé).

                        Ceux-ci défileront dans l’objectif de promouvoir les pièces des jeunes créateurs.
                        Des stands seront également proposés avec les vêtements des créateurs qui seront disponibles à la vente

                        Cet événement sera ouvert à un large public et restera, on l’espère, le plus longtemps dans l’esprit des participants.
                    </Typography>
                    <img src={logoQuiSommesNous} style={{ width: imgWidth, marginBottom: "5vh" }} />
                </Box>
            </Box>
            <Box sx={{
                padding: bodyMargin,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                backgroundColor: "#F2E1C7"
            }}>
                <Typography sx={{
                    fontSize: "1.5em",
                    fontWeight: "300",
                    lineHeight: "86px",
                    fontFamily: "Roboto Condensed, sans-serif",
                    marginRight: "5vw",
                }}>
                    Notre histoire :
                </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: flexDirection,
                    alignItems: "center",
                }}>
                    <img src={previousEdition} style={{ width: "300px", marginBottom: "5vh" }} />
                    <Typography sx={{
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontSize: "1.2em",
                        lineHeight: "25px",
                        margin: "0 5vw",
                        textAlign: "justify",
                        marginBottom: "5vh"
                    }}>
                        Découvrez notre parcours de plus de 10 ans à travers des défilés de mode uniques, mettant en lumière les thèmes
                        inspirants de l'intergénérationnel, l'interculturel et de l'inclusivité. Explorez nos nombreuses éditions et plongez
                        dans l'histoire captivante de notre projet.
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
};

export default WhoAreWe;