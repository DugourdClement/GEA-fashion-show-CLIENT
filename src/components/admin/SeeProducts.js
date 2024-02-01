import MUIDataTable from 'mui-datatables';
import React, {useEffect, useState} from "react";
import {Alert, AlertTitle, Badge, Grid} from "@mui/material";
import useGET from "../../hooks/useGET";
import {serverAPI} from "../../config/api";
import usePOST from "../../hooks/usePOST";
import ModalConfirmation from "./ModalConfirmation";

const SeeProducts = () => {
    const [response, setRequest] = useGET({url: '', data: {}, api: serverAPI});
    const [responsePost, setPostRequest] = usePOST({url: '', data: {}, api: serverAPI});

    const [error, setError] = useState({status: false, message: ""});
    const [allProducts, setAllProduct] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    useEffect(() => {
        setRequest({url: `ProductController.php?productAdmin=c`, data: {}, api: serverAPI});
    }, []);

    useEffect(() => {
        if (response) {
            if (Array.isArray(response?.data)) {
                setAllProduct(response.data);
                setError({status: false, message: ""});
            } else if (response) {
                setError({status: true, message: "Une erreur c'est produite lors de la récupération des produits."});
            }
        }
    }, [response, setAllProduct]);

    useEffect(() => {
        if (responsePost) {
            if (responsePost?.data) {
                setAllProduct(allProducts.filter(creator => creator[0] !== productToDelete[0]))
            } else if (responsePost) {
                setError({status: true, message: "Une erreur c'est produite lors de la mise à jour du produit."});
            }
        }
    }, [responsePost]);

    const deleteHandler = (name) => {
        const targetCreator = allProducts.find(creator => creator[1] === name);
        setProductToDelete(targetCreator);
        setIsOpen(true);
    };

    const deleteConfirm = () => {
        setPostRequest(prevState => ({
            ...prevState,
            url: 'ProductController.php',
            data: {product_id: productToDelete[0]}
        }))
        setIsOpen(false);
    };

    const columns = [
        'Nom',
        'Prix',
        'Créateur',
        'Lien',
        {
            name: "active", label: "Action", options: {
                filter: true, sort: true, customBodyRender: (value, tableMeta) => {
                    {
                        return (
                            <Badge color={!value ? "error" : "tertiary"} badgeContent="Supprimer"
                                   onClick={() => deleteHandler(tableMeta?.rowData[0])}
                                   sx={{cursor: "pointer"}}/>
                        );
                    }
                },
                setCellProps: () => ({
                    style: {justifyContent: 'center', display: 'flex', flexDirection: 'row'}
                }),
            }
        },
    ];

    const options = {
        filter: true,
        selectableRows: 'none',
    };

    const data = allProducts?.map(product => [
        product[1],
        product[2],
        product[5] ? product[5] : product[6] + ' ' + product[7],
        product[3],
    ]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ModalConfirmation isOpen={isOpen} setIsOpen={setIsOpen} deleteConfirm={deleteConfirm}
                                   text={'Si vous poursouvez, le produit sera définitivement supprimé.'}/>
                <MUIDataTable
                    title={'Tous les Produits'}
                    data={data}
                    columns={columns}
                    options={options}
                />
                {error.status && <Alert severity="error">
                    <AlertTitle>Erreur</AlertTitle>
                    {error.message}
                </Alert>}
            </Grid>
        </Grid>
    );
};

export default SeeProducts;
