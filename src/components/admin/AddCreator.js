import {Alert, AlertTitle, Box, Button, Grid, IconButton, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import CustomTextField from "./CustomTextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import usePOST from "../../hooks/usePOST";
import {serverAPI} from "../../config/api";

const AdminInfo = ({setFormData, formData, nameRequired = false}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CustomTextField
                    required={nameRequired}
                    label={"Nom"}
                    onChange={e => setFormData(prevState => ({
                        ...prevState,
                        lastname: e.target.value,
                    }))}
                    value={formData?.lastname}
                />
            </Grid>
            <Grid item xs={4}>
                <CustomTextField
                    label={"Prenom"}
                    required={false}
                    onChange={e => setFormData(prevState => ({
                        ...prevState,
                        firstname: e.target.value,
                    }))}
                    value={formData?.firstname}
                />
            </Grid>
            <Grid item xs={4}>
                <CustomTextField
                    label={"Membre du pôle gèrant"}
                    required={false}
                    onChange={e => setFormData(prevState => ({
                        ...prevState,
                        gerant: e.target.value,
                    }))}
                    value={formData?.gerant}
                />
            </Grid>
        </Grid>
    );
};

const initialState = {
    socials: {instagram: '', facebook: '', pinterest: ''}
}

const AddCreator = () => {
    const [responsePost, setPostRequest] = usePOST({url: '', data: {}, api: ''});

    const [formData, setFormData] = useState(initialState);
    const [selectedSocial, setSelectedSocial] = useState({instagram: false, facebook: false, pinterest: false});
    const [selectedType, setSelectedType] = useState('independant');
    const [error, setError] = useState({status: false, message: ""});


    useEffect(() => {
        if(responsePost) {
            if (responsePost?.data === true) {
                setFormData(initialState);
            } else if (responsePost) {
                setError({status: true, message: "Une erreur c'est produite lors de l'ajout' du créateur."});
            }
        }
    }, [responsePost]);

    const handleChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleSocial = (e) => {
        setFormData(prevState => {
            const newSocials = {...prevState.socials};
            if (selectedSocial.instagram) newSocials.instagram = e.target.value;
            if (selectedSocial.facebook) newSocials.facebook = e.target.value;
            if (selectedSocial.pinterest) newSocials.pinterest = e.target.value;

            return {...prevState, socials: newSocials};
        });
    };

    const handleSocialValue = () => {
        if (selectedSocial.instagram)
            return formData.socials.instagram ? formData.socials.instagram : '';
        else if (selectedSocial.facebook)
            return formData.socials.facebook ? formData.socials.facebook : '';
        else if (selectedSocial.pinterest)
            return formData.socials.pinterest ? formData.socials.pinterest : '';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPostRequest({url: 'CreatorController.php', data: formData, api: serverAPI});
    };

    return (
        <Grid container>
            <Grid item justifyContent="center" alignItems="center" sx={{mb: '4vh'}}>
                <Typography variant="h5">Ajouter un nouveau créateur</Typography>
            </Grid>
            <Grid item sx={{ml: '7vh', mb: '2vh'}}>
                <FormControl>
                    <FormLabel id="radio-label">Type de créateur</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="radio-label"
                        value={selectedType}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="independant" control={<Radio/>} label="Indépendant"/>
                        <FormControlLabel value="collectif" control={<Radio/>} label="Collectif"/>
                        <FormControlLabel value="other" control={<Radio/>} label="Autre"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid container spacing={2} sx={{padding: '1rem'}}>
                <Box component="form" onSubmit={handleSubmit} sx={{width: '100%'}}>
                    {selectedType === 'independant' &&
                        <AdminInfo setFormData={setFormData} formData={formData} nameRequired={true}/>}
                    {(selectedType === 'collectif' || selectedType === 'other') &&
                        <>
                            <Grid container spacing={2} sx={{mb: '3vh'}}>
                                <Grid item xs={6}>
                                    <CustomTextField
                                        label={selectedType === 'collectif' ? "Nom du collectif" : "Nom de l'organisation"}
                                        onChange={e => setFormData(prevState => ({
                                            ...prevState,
                                            orgName: e.target.value,
                                        }))}
                                        value={formData?.orgName}
                                    />
                                </Grid>
                            </Grid>
                            <AdminInfo setFormData={setFormData} formData={formData}/>
                        </>}
                    <Grid container spacing={2} className="mt-2" sx={{mt: '2vh'}}>
                        <Grid item xs={2}>
                            <CustomTextField
                                label={"Numéro"}
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    number: e.target.value,
                                }))}
                                value={formData?.number}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <CustomTextField
                                required={false}
                                label={"Email"}
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    mail: e.target.value,
                                }))}
                                value={formData?.mail}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <CustomTextField
                                required={false}
                                label={"Téléphone"}
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    phoneNumber: e.target.value,
                                }))}
                                value={formData?.phoneNumber}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <CustomTextField
                                label={"Nombre de tenues"}
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    nbOutfits: e.target.value,
                                }))}
                                value={formData?.nbOutfits}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="mt-2" sx={{mt: '2vh', pl: '5vh', pr: '5vh'}}>
                        <Grid item xs={6} container justifyContent="center" spacing={2}>
                            <Grid item>
                                <IconButton
                                    onClick={() => setSelectedSocial(prevState => ({
                                        instagram: !prevState.instagram,
                                        facebook: false,
                                        pinterest: false,
                                    }))}
                                    sx={{
                                        color: selectedSocial.instagram ? 'primary.main' : 'grey.500',
                                    }}
                                >
                                    <InstagramIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    onClick={() => setSelectedSocial(prevState => ({
                                        instagram: false,
                                        facebook: !prevState.facebook,
                                        pinterest: false,
                                    }))}
                                    sx={{
                                        color: selectedSocial.facebook ? 'primary.main' : 'grey.500',
                                    }}
                                >
                                    <FacebookIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    onClick={() => setSelectedSocial(prevState => ({
                                        instagram: false,
                                        facebook: false,
                                        pinterest: !prevState.pinterest,
                                    }))}
                                    sx={{
                                        color: selectedSocial.pinterest ? 'primary.main' : 'grey.500',
                                    }}
                                >
                                    <PinterestIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomTextField
                                required={false}
                                label={"Lien réseau"}
                                onChange={e => handleSocial(e)}
                                value={handleSocialValue()}
                                disable={!selectedSocial.instagram && !selectedSocial.facebook && !selectedSocial.pinterest}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" color="primary" sx={{mt: '2vh'}}>
                        Enregistrer
                    </Button>
                </Box>
            </Grid>
            {(error.email || error.password) && <Alert severity="error">
                <AlertTitle>Erreur</AlertTitle>
                {error.message}
            </Alert>}
        </Grid>
    );
};

export default AddCreator;
