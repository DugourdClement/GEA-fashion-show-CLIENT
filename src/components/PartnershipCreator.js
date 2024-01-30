import { Box, Paper, Typography } from "@mui/material";
import domus from "../components/asset/domus.png"
import associationFenetres from "../components/asset/associationFenetres.png"
import lauralba from "../components/asset/lauralba.png"
import lepopee from "../components/asset/lepopee.png"
import medinsoft from "../components/asset/medinsoft.png"
import olympicLocation from "../components/asset/olympicLocation.png"
import studioKaroDanse from "../components/asset/studioKaroDanse.png"
import theCamp from "../components/asset/theCamp.png"
import iutInfoAix from "../components/asset/iutInfoAix.jpg"


const partnerData = [
    { image: domus, name: 'Ehpad Domus Vi' },
    { image: associationFenetres, name: 'Association FenêtreS' },
    { image: lauralba, name: 'Lauralba' },
    { image: lepopee, name: 'L\épopée' },
    { image: medinsoft, name: 'Medinsoft' },
    { image: olympicLocation, name: 'Olympic Location' },
    { image: studioKaroDanse, name: 'Studio KA.RO Danse' },
    { image: theCamp, name: 'The Camp' },
    { image: iutInfoAix, name: 'IUT Informatique Aix-en-Provence' },
];

const PartnershipCreator = () => {
    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
        }}>
            {partnerData.map((partner) => (
                <Box
                    sx={{
                        margin: '5vh 0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src={partner.image} style={{ height: '200px' }} alt={partner.name} />
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontSize: '20px',
                            fontFamily: 'Roboto Condensed, sans-serif',
                            margin: '0 15vw',
                        }}
                    >
                        {partner.name}
                    </Typography>
                </Box>
            ))}
        </Box >
    );
};

export default PartnershipCreator;