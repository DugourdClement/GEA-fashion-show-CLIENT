import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";

const CustomTextField = ({label, required = true, onChange, value, style, multiline = false}) => {
    return (
        <TextField
            fullWidth
            multiline
            label={label}
            InputLabelProps={{
                style: {textAlign: 'center'},
                shrink: true
            }}
            size="small"
            {...style}
            required={required}
            onChange={e => onChange(e)}
            sx={{background: "white",}}
            value={value !== undefined ? value : ''}
        />
    );
};

const AddProduct = () => {
    const [formData, setFormData] = useState({size: {xs: false, s: false, m: false, l: false, xl: false}});
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imageFiles = files.filter(file =>
            file.type === 'image/jpeg' ||
            file.type === 'image/png' ||
            file.type === 'image/gif'
        );

        if (imageFiles.length !== files.length) {
            alert('Only image files are allowed.');
        } else
            setSelectedFiles(prevState => ({...prevState, imageFiles}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
                                label={"Nom produit"}
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    name: e.target.value,
                                }))}
                                value={formData?.name}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomTextField
                                label={"Prix"}
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
                                label={"Matières"}
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
                                multiline={true}
                                label={"Description"}
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    description: e.target.value,
                                }))}
                                value={formData?.description}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomTextField
                                multiline={true}
                                label={"Histoire"}
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
                            <CustomTextField
                                label={"Créateur"}
                                onChange={e => setFormData(prevState => ({
                                    ...prevState,
                                    creator: e.target.value,
                                }))}
                                value={formData?.creator}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomTextField
                                label={"Créateur lien"}
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
        </Grid>
    );
};

export default AddProduct;
