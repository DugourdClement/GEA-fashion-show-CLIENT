import {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";
import {Grid} from "@mui/material";

const SeeRegistered = () => {
    const [allRegistered, setAllRegistered] = useState([]);

    useEffect(() => {
        //API
        setAllRegistered();
    }, [setAllRegistered]);

    const columns = [
        'Nom',
        'Prenom',
        'Date',
    ];

    const options = {
        filter: true,
        selectableRows: 'none',
    };

    const data = allRegistered?.map(product => [
        product?.nom,
        product?.prenom,
        product?.date,
    ]);

    return (
        <Grid sx={{width: '100vh'}}>
            <MUIDataTable
                title={'Tous les inscrits'}
                data={data}
                columns={columns}
                options={options}
            />
        </Grid>
    );
};

export default SeeRegistered;
