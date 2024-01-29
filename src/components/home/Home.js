import { Box, Typography } from "@mui/material";
import defileIntergenrationnel from "../asset/defileInterGenerationnel.png"
import imgHomeDefile from "../asset/imgHomeDefile.png"

const Home = () => {
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
                    fontSize: "79px",
                    textTransform: "uppercase",
                    color: "#fff",
                    fontWeight: "300",
                    lineHeight: "86px",
                    fontFamily: "Roboto Condensed, sans-serif"
                }}>
                    Défilé
                </Typography>
                <Typography sx={{
                    fontSize: "79px",
                    textTransform: "uppercase",
                    color: "#fff",
                    fontWeight: "600",
                    lineHeight: "66px",
                    fontFamily: "Roboto Condensed, sans-serif"
                }}>
                    intergénérationnel
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 20px",
            }}>
                <Typography sx={{
                    textAlign: "center",
                    margin: "20px"
                }}>
                    Préparez-vous à être éblouis par Somebody Like You, un défilé de mode révolutionnaire prévu pour le 15 mars 2024 à 18h30
                    au cœur de Marseille, dans l'emblématique salle de l’espace Bergemon. Ce projet exceptionnel monté par des étudiants de
                    l’IUT d’Aix-en-Provence relève le défi de mêler harmonieusement les générations à travers la mode. Imaginez des jeunes
                    talents créatifs partageant la scène avec des mannequins séniors, vibrez au rythme d'une fusion intergénérationnelle de
                    styles, le tout orchestré par un DJ électrisant et d’autres intervenants.
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;
