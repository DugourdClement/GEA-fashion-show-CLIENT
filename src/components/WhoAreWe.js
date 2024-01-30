import { Box, Typography } from "@mui/material";
import logoQuiSommesNous from "../components/asset/logoQuiSommesNous.png"
import previousEdition from "../components/asset/previousEdition.png"

const WhoAreWe = () => {
    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <Box sx={{
                margin: "10vh 40vh 5vh 20vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Typography sx={{
                    fontSize: "6em",
                    fontWeight: "300",
                    lineHeight: "86px",
                    fontFamily: "Cookie, cursive",
                }}>
                    Qui sommes nous ?
                </Typography>
            </Box>
            <Box sx={{
                margin: "5vh 30vh 10vh 20vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Typography sx={{
                    fontSize: "1.5em",
                    fontWeight: "300",
                    lineHeight: "86px",
                    fontFamily: "Roboto Condensed, sans-serif",
                }}>
                    Description de l'évènement :
                </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Typography sx={{
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontSize: "1.2em",
                        lineHeight: "25px",
                        marginRight: "5vw"
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
                    <img src={logoQuiSommesNous} style={{ width: "300px" }} />
                </Box>
            </Box>
            <Box sx={{
                padding: "5vh 40vh 10vh 30vh",
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
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <img src={previousEdition} style={{ width: "300px" }} />
                    <Typography sx={{
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontSize: "1.2em",
                        lineHeight: "25px",
                        margin: "0 5vw",
                        textAlign: "end"
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