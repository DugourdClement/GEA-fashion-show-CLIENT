import MUIDataTable from 'mui-datatables';
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";

const SeeProducts = () => {
    const [allProducts, setAllProduct] = useState([]);

    useEffect(() => {
        //API
        setAllProduct();
    }, [setAllProduct]);

    const columns = [
        'Nom',
        'Prix',
        'Taille',
        'Createur',
    ]; // peut etre link mais cut

    const options = {
        filter: true,
        selectableRows: 'none',
    };

    const data = allProducts?.map(product => [
        product?.nom,
        product?.prix,
        product?.taille.services.join(', '),
        product?.createur,
    ]);

    const dataTest = [['iybb', '54', 'm', 'gg']]

    return (
        <Grid sx={{width: '100vh'}}>
            <MUIDataTable
                title={'Tous les produits'}
                data={dataTest}
                columns={columns}
                options={options}
            />
        </Grid>
    );
};

export default SeeProducts;
