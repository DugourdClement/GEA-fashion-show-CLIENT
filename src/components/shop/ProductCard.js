import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Card,
    CardMedia,
    Divider,
    Grid, IconButton,
    Link,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';

const TruncatedLink = ({url, text}) => {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
                display: 'inline-block',
                maxWidth: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                p: '1vh',
                pl: '2vh',
                pr: '2vh'
            }}
        >
            {text}
        </Link>
    );
};

export const IconLink = ({url, icon}) => {
    return (

        <IconButton>
            <Link href={url} target="_blank" rel="noopener noreferrer">
                {icon}
            </Link>
        </IconButton>

    );
};

export const ImageCarousel = ({
    images, onClick = () => {
    }
}) => {

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

    const carousselWidth = windowWidth < 1000 ? "80vw" : "450px";
    const carousselHeight = windowWidth < 1000 ? "auto" : "300px";

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevActiveIndex) =>
            prevActiveIndex > 0 ? prevActiveIndex - 1 : images.length - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevActiveIndex) =>
            prevActiveIndex < images.length - 1 ? prevActiveIndex + 1 : 0
        );
        console.log(activeIndex)
    };



    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: carousselWidth, height: carousselHeight }} onClick={e => onClick(e)}>
            <Button onClick={handlePrev}>
                <ArrowBackIosNewIcon />
            </Button>
            <Card>
                <CardMedia
                    sx={{ width: "100%" }}
                    component="img"
                    image={images[activeIndex]}
                    alt={`Image ${activeIndex + 1}`}
                />
            </Card>
            <Button onClick={handleNext}>
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    );
};

export const ExtendedProduct = ({product}) => {
    const [creatorShopOpen, setCreatorShopOpen] = useState(false);
    const [sizesOpen, setSizesOpen] = useState(false);
    const [materialsOpen, setMaterialsOpen] = useState(false);

    const creatorLink = {
        instagram: product.creator.instagram,
        facebook: product.creator.facebook,
        pinterest: product.creator.pinterest
    }

    return (
        <>
            <Grid container sx={{mt: '5vh'}}>
                <Grid item xs={6}>
                    <ImageCarousel images={product.pictures}/>
                </Grid>
                <Grid item xs={1}>
                    <Box sx={{height: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Divider orientation="vertical" sx={{height: 'inherit'}}/>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h4'>{product.productName}</Typography>
                    <Typography variant="body1" sx={{wordWrap: 'break-word', overflow: 'hidden'}}>
                        {product.price} €
                    </Typography>

                    <Typography variant='h5' sx={{
                        mt: '4vh',
                        backgroundColor: 'gray',
                        borderRadius: '1vh',
                        pl: '1vh',
                        cursor: 'pointer'
                    }}
                                onClick={() => setCreatorShopOpen(prevState => !prevState)}>
                        La boutique</Typography>
                    {(creatorShopOpen && product.link) &&
                        <TruncatedLink url={product.link} text={'Site du créateur'}/>
                    }
                    {creatorShopOpen &&
                        <Divider variant='middle' sx={{mb: '2vh'}}/>}
                    {creatorShopOpen &&
                        <Box
                            sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: '2vh'}}>
                            <Grid container justifyContent='space-around'>
                                {creatorLink.instagram &&
                                    <IconLink url={creatorLink.instagram} icon={<InstagramIcon/>}/>}
                                {creatorLink.facebook &&
                                    <IconLink url={creatorLink.facebook} icon={<FacebookIcon/>}/>}
                                {creatorLink.pinterest &&
                                    <IconLink url={creatorLink.pinterest} icon={<PinterestIcon/>}/>}
                            </Grid>
                        </Box>}
                    <Typography variant='h5' sx={{
                        mt: '2vh',
                        backgroundColor: 'gray',
                        borderRadius: '1vh',
                        pl: '1vh',
                        cursor: 'pointer'
                    }}
                                onClick={() => setSizesOpen(prevState => !prevState)}>
                        Tailles disponibles</Typography>
                    {sizesOpen &&
                        <Box
                            sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: '2vh'}}>
                            <Grid container spacing={3} justifyContent='center'>
                                {product.sizes.map((size, index) => (
                                    <Grid key={index} item sx={{p: '1vh'}}>
                                        <Card sx={{pl: '1vh', pr: '1vh'}}>
                                            {size.toUpperCase()}
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>}

                    <Typography variant='h5' sx={{
                        mt: '3vh',
                        backgroundColor: 'gray',
                        borderRadius: '1vh',
                        pl: '1vh',
                        cursor: 'pointer'
                    }}
                                onClick={() => setMaterialsOpen(prevState => !prevState)}>Matériaux</Typography>
                    {materialsOpen &&
                        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', ml: '2vh'}}>
                            {product.materials !== '' && product.materials.split(', ').map((material) => (
                                <ListItem
                                    key={material}
                                    disableGutters
                                >
                                    <ListItemText primary={`- ${material}`}/>
                                </ListItem>
                            ))}
                        </List>}
                </Grid>
            </Grid >
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', height: '100%', padding: "20px" }}>
                <Typography variant='h5' sx={{ mt: '5vh', fontFamily: "Roboto Condensed, sans-serif" }}>Description</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ wordWrap: 'break-word', overflow: 'hidden', fontFamily: "Roboto Condensed, sans-serif" }}>
                        {product.description}
                    </Typography>
                </Box>
            </Box>
            {
                product.history &&
                <Grid sx={{ p: '2vh', mb: '3vh', pl: '7vh', pr: '7vh' }}>
                    <Typography variant='h5' sx={{ mt: '2vh', fontFamily: "Roboto Condensed, sans-serif" }}>Histoire</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Typography variant="body1"
                            sx={{ wordWrap: 'break-word', overflow: 'hidden', fontFamily: "Roboto Condensed, sans-serif" }}>
                            {product.history}
                        </Typography>
                    </Box>
                </Grid>}
        </>
    );
};

export const PreviewCard = ({product, productIndex, toggleCard}) => {
    const handleCarouselClick = (event) => {
        event.stopPropagation();
    };

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

    const flexDirection = windowWidth < 1000 ? "column" : "row";
    const dividerDisplay = windowWidth < 1000 ? "none" : "default";

    return (
        <Box container onClick={() => toggleCard(productIndex)} sx={{ cursor: 'pointer', display: "flex", flexDirection: flexDirection, alignItems: "center" }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '50vh'
            }}>
                <ImageCarousel images={product.pictures} onClick={handleCarouselClick}/>
            </Box>
            <Grid item xs={1}>
                <Box sx={{height: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Divider orientation="vertical" sx={{height: 'inherit'}}/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{display: 'flex', alignItems: 'center', height: '100%'}}>
                    <Typography variant="body1"
                                sx={{wordWrap: 'break-word', overflow: 'hidden'}}>
                        {product.description}
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
};