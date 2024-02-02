import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Card, CardContent,
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

const TruncatedLink = ({ url, text }) => {
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

export const IconLink = ({ url, icon }) => {
    return (

        <IconButton>
            <Link href={url} target="_blank" rel="noopener noreferrer">
                {icon}
            </Link>
        </IconButton>

    );
};

export const ImageCarousel = ({
    images, product, onClick = () => {
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

    const buttonWidth = windowWidth < 800 ? "15px" : "50px";

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
        <Box sx={{ display: 'flex', alignItems: 'center'}}
            onClick={e => onClick(e)}>
            <Button sx={{ width: buttonWidth }} onClick={handlePrev}>
                <ArrowBackIosNewIcon sx={{ width: 'inherit' }} />
            </Button>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card>
                    <CardMedia
                        sx={{ width: "100%" }}
                        component="img"
                        image={images[activeIndex]}
                        alt={`Image ${activeIndex + 1}`}
                    />
                </Card>
                <Typography sx={{ mt: 3, fontFamily: "Roboto Condensed, sans-serif", }}>
                    {product}
                </Typography>
            </Grid>
            <Button sx={{ width: buttonWidth }} onClick={handleNext}>
                <ArrowForwardIosIcon sx={{ width: "inherit" }} />
            </Button>
        </Box>
    );
};

export const ExtendedProduct = ({ product }) => {
    const [creatorShopOpen, setCreatorShopOpen] = useState(false);
    const [sizesOpen, setSizesOpen] = useState(false);
    const [materialsOpen, setMaterialsOpen] = useState(false);

    const creatorLink = {
        instagram: product.creator.instagram,
        facebook: product.creator.facebook,
        pinterest: product.creator.pinterest
    }

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

    const dividerDisplay = windowWidth < 1200 ? "none" : "default";
    const flexDirection = windowWidth < 1200 ? "column" : "row";
    const margin = windowWidth < 800 ? "0" : "0 40px";
    const fontSize = windowWidth < 800 ? "1.5em" : "2.5em";
    const propertySize = windowWidth < 800 ? "1.1em" : "1.3em";

    return (
        <Box>
            <Box sx={{ display: "flex", flexDirection: flexDirection, margin: "20px 0" }}>
                <Box sx={{ margin: margin }}>
                    <ImageCarousel images={product.pictures} product={product.productName} />
                </Box>
                <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Divider orientation="vertical" sx={{ height: '300px', display: dividerDisplay }} />
                </Box>
                <Box sx={{ margin: margin }}>
                    <Typography sx={{ fontSize: fontSize }}>{product.productName}</Typography>
                    <Typography variant="body1" sx={{ wordWrap: 'break-word', overflow: 'hidden' }}>
                        {product.price} €
                    </Typography>

                    <Typography sx={{
                        fontSize: propertySize,
                        fontFamily: "Roboto Condensed, sans-serif",
                        mt: '4vh',
                        background: "#DCDCDC",
                        pl: '1vh',
                        cursor: 'pointer'
                    }}
                        onClick={() => setCreatorShopOpen(prevState => !prevState)}>
                        La boutique</Typography>
                    {(creatorShopOpen && product.link) &&
                        <TruncatedLink url={product.link} text={'Site du créateur'} />
                    }
                    {creatorShopOpen &&
                        <Divider variant='middle' sx={{ mb: '2vh' }} />}
                    {creatorShopOpen &&
                        <Box
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: '2vh' }}>
                            <Grid container justifyContent='space-around'>
                                {creatorLink.instagram &&
                                    <IconLink url={creatorLink.instagram} icon={<InstagramIcon />} />}
                                {creatorLink.facebook &&
                                    <IconLink url={creatorLink.facebook} icon={<FacebookIcon />} />}
                                {creatorLink.pinterest &&
                                    <IconLink url={creatorLink.pinterest} icon={<PinterestIcon />} />}
                            </Grid>
                        </Box>}
                    <Typography sx={{
                        fontSize: propertySize,
                        fontFamily: "Roboto Condensed, sans-serif",
                        mt: '2vh',
                        background: "#DCDCDC",
                        pl: '1vh',
                        cursor: 'pointer'
                    }}
                        onClick={() => setSizesOpen(prevState => !prevState)}>
                        Tailles disponibles</Typography>
                    {sizesOpen &&
                        <Box
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: '2vh' }}>
                            <Grid container spacing={1} justifyContent='center'>
                                {product.sizes.map((size, index) => (
                                    <Grid key={index} item sx={{ p: '1vh' }}>
                                        <Card sx={{ pl: '1vh', pr: '1vh' }}>
                                            {size.toUpperCase()}
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>}

                    <Typography sx={{
                        fontSize: propertySize,
                        fontFamily: "Roboto Condensed, sans-serif",
                        mt: '2vh',
                        background: "#DCDCDC",
                        pl: '1vh',
                        cursor: 'pointer'
                    }}
                        onClick={() => setMaterialsOpen(prevState => !prevState)}>Matériaux</Typography>
                    {materialsOpen &&
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', ml: '2vh' }}>
                            {product.materials !== '' && product.materials.split(', ').map((material) => (
                                <ListItem
                                    key={material}
                                    disableGutters
                                >
                                    <ListItemText sx={{ fontFamily: "Roboto Condensed, sans-serif" }} primary={`- ${material}`} />
                                </ListItem>
                            ))}
                        </List>}
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', height: '100%', padding: "20px" }}>
                <Typography variant='h5'
                    sx={{ mt: '5vh', fontFamily: "Roboto Condensed, sans-serif" }}>Description</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{
                        wordWrap: 'break-word',
                        overflow: 'hidden',
                        fontFamily: "Roboto Condensed, sans-serif"
                    }}>
                        {product.description}
                    </Typography>
                </Box>
            </Box>
            {
                product.history &&
                <Box sx={{ padding: "20px" }}>
                    <Typography variant='h5'
                        sx={{ mt: '2vh', fontFamily: "Roboto Condensed, sans-serif" }}>Histoire</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Typography variant="body1"
                            sx={{
                                wordWrap: 'break-word',
                                overflow: 'hidden',
                                fontFamily: "Roboto Condensed, sans-serif"
                            }}>
                            {product.history}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    );
};

export const PreviewCard = ({ product, productIndex, toggleCard }) => {
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

    const flexDirection = windowWidth < 800 ? "column" : "row";
    const dividerDisplay = windowWidth < 800 ? "none" : "default";
    const boxHeight = windowWidth < 800 ? "default" : "350px"
    return (
        <Box onClick={() => toggleCard(productIndex)}
            sx={{ cursor: 'pointer', display: "flex", flexDirection: flexDirection, alignItems: "center", height: boxHeight }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: "0 40px",
                maxWidth: '80vh'
            }}>
                <ImageCarousel images={product.pictures} product={product.productName} onClick={handleCarouselClick} />
            </Box>
            <Divider orientation="vertical" sx={{ height: '250px', display: dividerDisplay }} />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: "0 40px",
            }}>
                <Typography variant="body1"
                    sx={{
                        wordWrap: 'break-word', overflow: 'hidden', fontFamily: "Roboto Condensed, sans-serif"
                    }}>
                    {product.description}
                </Typography>
            </Box>
        </Box>
    );
};