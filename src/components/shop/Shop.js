import React, {useEffect} from 'react';
import {
    Alert,
    AlertTitle,
    Card,
    Typography
} from "@mui/material";
import {useState} from "react";
import {serverAPI} from "../../config/api";
import useGET from "../../hooks/useGET";
import {ExtendedProduct, PreviewCard} from "./ProductCard";

const Shop = () => {
    const images = [
        {
            creator: 'bigJim',
            products:
                [
                    {
                        id: 23616548,
                        img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'],
                        name: 'Breakfast',
                        creator: '@bkristastucchio',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        size: '["S","M","L"]',
                        price: '45.3',
                        materials: 'tyf, guhbijo,pl, fcgvhbjn,l',
                        socials: {instagramLink: 'insta', facebookLink: 'face', pinterestLink: 'pint'},
                        creatorLink: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                    },
                    {
                        id: 236884114,
                        img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'],
                        name: 'Burger',
                        creator: '@rollelflex_graphy726',
                    },
                    {
                        id: 78844,
                        img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'],
                        name: 'Camera',
                        creator: '@helloimnik',
                    },
                ],
        },
        {
            creator: 'jack.C',
            products:
                [
                    {
                        id: 1848844154,
                        img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'],
                        name: 'Coffee',
                        creator: '@nolanissac',
                    },
                    {
                        id: 2361,
                        img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'],
                        name: 'Hats',
                        creator: '@hjrc33',
                    },
                    {
                        id: 2316541659,
                        img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'],
                        name: 'Honey',
                        creator: '@arwinneil',
                    },
                    {
                        id: 1645,
                        img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'],
                        name: 'Basketball',
                        creator: '@tjdragotta',
                    },
                ],
        },
        {
            creator: 'Le type glauque',
            products:
                [
                    {
                        id: 8495984,
                        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                        name: 'Fern',
                        creator: '@katie_wasserman',
                    },
                ],
        },
        {
            creator: 'Joubert',
            products:
                [
                    {
                        id: 154,
                        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                        name: 'Fern',
                        creator: '@katie_wasserman',
                    },
                    {
                        id: 86525,
                        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                        name: 'Mushrooms',
                        creator: '@silverdalex',
                    },
                    {
                        id: 54161684,
                        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                        name: 'Tomato basil',
                        creator: '@shelleypauls',
                    },
                    {
                        id: 97846,
                        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                        name: 'Sea star',
                        creator: '@peterlaster',
                    },
                    {
                        id: 9712,
                        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                        name: 'Bike',
                        creator: '@southside_customs',
                    },
                ],
        },
    ];
    const [response, setRequest] = useGET({url: `ProductController.php`, data: {}, api: serverAPI});

    const [openCardIndex, setOpenCardIndex] = useState(null);
    const [products, setProducts] = useState(null);
    const [error, setError] = useState({status: false, message: ""});

    useEffect(() => {
        if (response?.data) {
            console.log(response.data)
            setProducts(response.data);
            setError({status: false, message: ""});
        } else if (response) {
            setError({status: true, message: "Une erreur c'est produite lors de la récupération des produits."});
        }
    }, [response]);

    const toggleCard = (index) => {
        setOpenCardIndex(prevIndex => prevIndex === index ? null : index);
        console.log(index)
    };

    return (
        <Card sx={{maxWidth: '90%', margin: 'auto', mt: 5, mb: 5, p: '2vh', backgroundColor: 'gray'}}>
            {products?.map((creator, index) =>
                (<React.Fragment key={index}>
                    <Typography variant="h4"
                                sx={{p: '2vh'}}>{creator[1] ? creator[1] : creator[2] + ' ' + creator[3]}</Typography>
                    {creator[4].map((product) => (
                        <Card
                            key={product.productId}
                            sx={{
                                mt: '2vh',
                                mb: '2vh',
                                p: '1vh',
                                height: 'auto'
                            }}>
                            {(openCardIndex !== product.productId || openCardIndex === null) ?
                                <PreviewCard product={product} productIndex={product.productId}  toggleCard={toggleCard}/>
                                :
                                <ExtendedProduct productIndex={product.productId} product={product}/>}
                        </Card>
                    ))}
                </React.Fragment>))}
            {error.status && <Alert severity="error">
                <AlertTitle>Erreur</AlertTitle>
                {error.message}
            </Alert>}
        </Card>
    );
};

export default Shop;