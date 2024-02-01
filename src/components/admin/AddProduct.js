import {Alert, AlertTitle, Autocomplete, Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import CustomTextField from "./CustomTextField";
import {serverAPI} from "../../config/api";
import usePOST from "../../hooks/usePOST";
import useGET from "../../hooks/useGET";
import FormControl from "@mui/material/FormControl";

const initialState = {
    size: {xs: false, s: false, m: false, l: false, xl: false},
    images: [],
};

const AddProduct = () => {
    const [response, setRequest] = useGET({url: '', data: {}, api: ''});
    const [responsePost, setPostRequest] = usePOST({url: '', data: {}, api: ''});

    const [formData, setFormData] = useState(initialState);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [error, setError] = useState({status: false, message: ""});
    const [creatorId, setCreatorId] = useState("");
    const [possibleCreator, setPossibleCreator] = useState([]);

    useEffect(() => {
        if (Object.keys(creatorId).length < 2) {
            return;
        }

        const timeout = setTimeout(() => {
            console.log("fetchCreator")
            const fetchCreators = async () => {
                setRequest({
                    url: `/CreatorController.php?selectCreators=${creatorId}`, data: {}, api: serverAPI
                });
            };

            fetchCreators();
        }, 700);

        return () => {
            clearTimeout(timeout);
        }
    }, [setRequest, creatorId]);

    useEffect(() => {
        if (response) {
            if (response?.data) {
                setPossibleCreator(response.data);
                setError({status: false, message: ""});
                console.log(response.data)
            } else if (response) {
                setError({status: true, message: "Une erreur c'est produite lors de la récupération des créateurs."});
            }
        }
    }, [response, setPossibleCreator]);

    useEffect(() => {
        if (responsePost) {
            if (responsePost?.data === true) {
                setFormData(initialState);
                setError({status: false, message: ""});
            } else if (responsePost) {
                setError({status: true, message: "Une erreur c'est produite lors de l'ajout du produit'."});
            }
        }
    }, [responsePost]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imageFiles = files.filter(file =>
            file.type === 'image/jpeg' ||
            file.type === 'image/png' ||
            file.type === 'image/gif'
        );

        if (imageFiles.length !== files.length) {
            alert('Seulement les images sont autorisées.');
        } else
            setSelectedFiles(prevState => ({...prevState, imageFiles}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const objFormData = new FormData();

        selectedFiles.imageFiles.forEach((file, index) => {
            objFormData.append(`images[${index}]`, file);
        });

        Object.keys(formData).forEach(key => {
            if (key !== 'images' && key !== 'size') {
                objFormData.append(key, formData[key]);
            }
        });

        Object.values(formData.size).forEach(value => {
            objFormData.append('size[]', value); // Append each boolean value under 'size[]'
        });

        for (let [key, value] of objFormData.entries()) {
            console.log(key, value);
        }
        setPostRequest({url: 'ProductController.php', data: objFormData, api: serverAPI});
    };

    return (
        <Grid container>
            <Grid item justifyContent="center" alignItems="center" sx={{mb: '4vh'}}>
                <Typography variant="h5">Ajouter un nouveau produit</Typography>
            </Grid>
            <Grid container spacing={2} sx={{padding: '1rem'}}>
                <Box component="form" onSubmit={handleSubmit} sx={{width: '100%'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <CustomTextField
                                label="Nom produit"
                                required
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    name: e.target.value,
                                }))}
                                value={formData?.name}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomTextField
                                label="Prix"
                                type="number"
                                required
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    price: e.target.value,
                                }))}
                                value={formData?.price}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="mt-2" sx={{mt: '2vh'}}>
                        <Grid item xs={6} container justifyContent="center" spacing={2}>
                            <Grid item>
                                <Button
                                    onClick={() => setFormData(prevState => ({
                                        ...prevState,
                                        size: {...prevState.size, xs: !prevState.size.xs},
                                    }))}
                                    variant={formData.size.xs ? "contained" : "outlined"}
                                >XS</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => setFormData(prevState => ({
                                        ...prevState,
                                        size: {...prevState.size, s: !prevState.size.s},
                                    }))}
                                    variant={formData.size.s ? "contained" : "outlined"}
                                >S</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => setFormData(prevState => ({
                                        ...prevState,
                                        size: {...prevState.size, m: !prevState.size.m},
                                    }))}
                                    variant={formData.size.m ? "contained" : "outlined"}
                                >M</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => setFormData(prevState => ({
                                        ...prevState,
                                        size: {...prevState.size, l: !prevState.size.l},
                                    }))}
                                    variant={formData.size.l ? "contained" : "outlined"}
                                >L</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => setFormData(prevState => ({
                                        ...prevState,
                                        size: {...prevState.size, xl: !prevState.size.xl},
                                    }))}
                                    variant={formData.size.xl ? "contained" : "outlined"}
                                >XL</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomTextField
                                label="Matières"
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    materials: e.target.value,
                                }))}
                                value={formData?.materials}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="mt-2" sx={{mt: '2vh'}}>
                        <Grid item xs={6}>
                            <CustomTextField
                                label="Description"
                                multiline
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    description: e.target.value,
                                }))}
                                value={formData?.description}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomTextField
                                label="Histoire"
                                multiline
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    history: e.target.value,
                                }))}
                                value={formData?.history}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="mt-2" sx={{mt: '2vh'}}>
                        <Grid item xs={6}>
                            <FormControl fullWidth variant="standard">
                                <Autocomplete
                                    freeSolo
                                    disableClearable
                                    options={possibleCreator}
                                    getOptionLabel={(option) => {
                                        if (option.ORG_NAME) {
                                            return option.ORG_NAME;
                                        }
                                        return [option.FIRSTNAME, option.LASTNAME].filter(Boolean).join(' ');
                                    }}
                                    renderOption={(props, option) => (
                                        <Box {...props} key={option.CREATOR_ID} sx={{
                                            backgroundColor: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#dcdcdc',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                            textTransform: 'uppercase'
                                        }}>
                                            {option.ORG_NAME ? option.ORG_NAME : option.FIRSTNAME + ' ' + option.LASTNAME}
                                        </Box>
                                    )}
                                    onChange={(event, newValue) => {
                                        const selectedCreator = possibleCreator.find(
                                            (client) => client.CREATOR_ID === newValue.CREATOR_ID
                                        );
                                        setFormData(prevState => ({
                                            ...prevState,
                                            creatorId: selectedCreator.CREATOR_ID
                                        }));
                                    }}
                                    onInputChange={(e, value) => setCreatorId(value)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Createur"
                                            InputLabelProps={{
                                                style: {textAlign: 'center'},
                                                shrink: true
                                            }}
                                            required
                                            size="small"
                                            style={{background: "white"}}
                                        />
                                    )}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomTextField
                                label="Lien boutique"
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    creatorLink: e.target.value,
                                }))}
                                value={formData?.creatorLink}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        type="file"
                        inputProps={{multiple: true}}
                        onChange={handleImageChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    {selectedFiles.length > 0 && (
                        <div>
                            {Array.from(selectedFiles).map((file, index) => (
                                <img key={index} src={URL.createObjectURL(file)} alt="Preview"
                                     style={{width: '100px', height: '100px', margin: '10px'}}/>
                            ))}
                        </div>
                    )}
                    <Button type="submit" variant="contained" color="primary">
                        Enregistrer
                    </Button>
                </Box>
            </Grid>
            {error.status && <Alert severity="error">
                <AlertTitle>Erreur</AlertTitle>
                {error.message}
            </Alert>}
        </Grid>
    );
};

export default AddProduct;
