import {useState} from "react";
import {Button, Card, CardContent, Grid} from "@mui/material";
import AddProduct from "./AddProduct";
import SeeProducts from "./SeeProducts";
import AddCreator from "./AddCreator";
import SeeCreator from "./SeeCreators";

const AdminConsole = () => {
    const [selectedComponent, setSelectedComponent] = useState('seeProducts');
    const renderComponent = () => {
        switch (selectedComponent) {
            case 'addProduct':
                return <AddProduct/>;
            case 'seeProducts':
                return <SeeProducts/>;
            case 'addCreator':
                return <AddCreator/>;
            case 'seeCreator':
                return <SeeCreator/>;
            default:
                return null;
        }
    };

    return (
        <Card sx={{maxWidth: '90%', margin: 'auto', mt: 5, mb: 5}}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={2} sx={{mr: '5vh'}}>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}}
                                onClick={() => setSelectedComponent('seeProducts')} fullWidth>
                            Tous les produits
                        </Button>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}}
                                onClick={() => setSelectedComponent('addProduct')} fullWidth>
                            Ajouter un produit
                        </Button>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}}
                                onClick={() => setSelectedComponent('addCreator')} fullWidth>
                            Ajouter un créateur
                        </Button>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}}
                                onClick={() => setSelectedComponent('seeCreator')} fullWidth>
                            Tous les créateurs
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={9} sx={{display: 'flex', justifyContent: 'center'}}>
                        {renderComponent()}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AdminConsole;
