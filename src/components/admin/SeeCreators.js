import MUIDataTable from 'mui-datatables';
import React, {useEffect, useState} from "react";
import {Alert, AlertTitle, Badge, Grid} from "@mui/material";
import useGET from "../../hooks/useGET";
import {serverAPI} from "../../config/api";
import usePOST from "../../hooks/usePOST";
import ModalConfirmation from "./ModalConfirmation";

const SeeCreator = () => {
    const [response, setRequest] = useGET({url: '', data: {}, api: serverAPI});
    const [responsePost, setPostRequest] = usePOST({url: '', data: {}, api: serverAPI});

    const [error, setError] = useState({status: false, message: ""});
    const [allCreator, setAllCreator] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [creatorToDelete, setCreatorToDelete] = useState(null);

    useEffect(() => {
        setRequest({url: `CreatorController.php`, data: {}, api: serverAPI});
    }, []);

    useEffect(() => {
        if(response) {
            if (response?.data) {
                setAllCreator(response.data);
            } else if (response) {
                setError({status: true, message: "Une erreur c'est produite lors de la récupération des créateurs."});
            }
        }
    }, [response, setAllCreator]);

    useEffect(() => {
        if(responsePost) {
            if (responsePost?.data) {
                setAllCreator(allCreator.filter(creator => creator.CREATOR_ID !== creatorToDelete.CREATOR_ID))
            } else if (responsePost) {
                setError({status: true, message: "Une erreur c'est produite lors de la mise à jour du créateur."});
            }
        }
    }, [responsePost]);

    const deleteHandler = (num_passage) => {
        const targetCreator = allCreator.find(creator => creator.NUM_PASSAGE === num_passage);
        setCreatorToDelete(targetCreator);
        setIsOpen(true);
    };

    const deleteConfirm = () => {
        setPostRequest(prevState => ({...prevState, url: 'CreatorController.php', data: {CREATOR_ID: creatorToDelete.CREATOR_ID}}))
        setIsOpen(false);
    };

    const columns = [
        'Passage',
        'Type',
        'Nom org',
        'Prenom',
        'Nom',
        'Pole gérant',
        'Email',
        'Tenues',
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
                }
            }
        },
    ];

    const options = {
        filter: true,
        selectableRows: 'none',
    };

    console.log(allCreator)
    const data = allCreator.length !== 0 ? allCreator.map(creator => [
        creator.NUM_PASSAGE,
        creator.ORG_NAME ? 'Organisation' : 'Indépendant',
        creator.ORG_NAME && creator.ORG_NAME,
        creator.FIRSTNAME,
        creator.LASTNAME,
        creator.GERANT,
        creator.EMAIL,
        creator.NB_TENUES,
    ]) : [];

    return (
        <Grid>
            <ModalConfirmation isOpen={isOpen} setIsOpen={setIsOpen} deleteConfirm={deleteConfirm} text={'Si vous poursouvez, le créateur sera définitivement supprimé ainsi que tous ces produits.'}/>
            <MUIDataTable
                title={'Tous les Créateur'}
                data={data}
                columns={columns}
                options={options}
            />
            {(error.email || error.password) && <Alert severity="error">
                <AlertTitle>Erreur</AlertTitle>
                {error.message}
            </Alert>}
        </Grid>
    );
};

export default SeeCreator;
