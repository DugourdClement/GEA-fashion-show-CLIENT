import React, { useEffect } from 'react';
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
        <Card sx={{ maxWidth: '90%', margin: 'auto', mt: 5, mb: 5, p: '2vh', background: "#f7f7f7" }}>
            {products?.map((creator, index) =>
            (<React.Fragment key={index}>
                <Typography variant="h4" sx={{ p: '2vh', fontFamily: "Roboto Condensed, sans-serif" }}>{creator[1] ? creator[1] : creator[2] + ' ' + creator[3]}</Typography>
                {creator[4].map((product) => (
                    <Card
                        key={product.productId}
                        sx={{
                            mt: '2vh',
                            mb: '2vh',
                            p: '1vh',
                            height: 'auto',

                        }}>
                        {(openCardIndex !== product.productId || openCardIndex === null) ?
                            <PreviewCard product={product} productIndex={product.productId}  toggleCard={toggleCard}/>
                            :
                            <ExtendedProduct productIndex={product.productId} product={product}/>}
                    </Card>
                ))}
            </React.Fragment>))}
            {(error.email || error.password) && <Alert severity="error">
                <AlertTitle>Erreur</AlertTitle>
                {error.message}
            </Alert>}
        </Card>
    );
};

export default Shop;