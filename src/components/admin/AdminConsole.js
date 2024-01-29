import {useState} from "react";
import {Button, Card, CardContent, Grid} from "@mui/material";
import AddProduct from "./AddProduct";
import SeeRegistered from "./SeeRegistered";

const AdminConsole = () => {
    const [selectedComponent, setSelectedComponent] = useState('addProduct');
    const renderComponent = () => {
        switch (selectedComponent) {
            case 'addProduct':
                return <AddProduct/>;
            case 'seeRegistered':
                return <SeeRegistered/>;
            default:
                return null;
        }
    };

    return (
        <Card sx={{maxWidth: '90%', margin: 'auto', marginTop: 5}}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={2}>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}}
                                onClick={() => setSelectedComponent('addProduct')} fullWidth>
                            Entreprise
                        </Button>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}}
                                onClick={() => setSelectedComponent('seeRegistered')} fullWidth>
                            Chantiers
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={10} sx={{display: 'flex', justifyContent: 'center'}}>
                        {renderComponent()}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AdminConsole;
