import {useState, useEffect} from 'react'
import usePOST from "../hooks/usePOST";
import {serverAPI} from "../config/api"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom";
import {
    Card,
    CardContent,
    InputAdornment,
    TextField,
    Typography,
    Button,
    Alert,
    Box,
    Stack,
    AlertTitle
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {userActions} from "../_store/slices/user-slice";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({email: false, password: false, message: ""});

    const [response, setRequest] = usePOST({url: ``, data: {}, api: serverAPI});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async () => {
        if (!email.includes('@')) {
            setError({email: true, password: false, message: "Email non conforme, merci de vérifier vos identifiants."});
            return;
        } else if (password.trim() === '') {
            setError({email: false, password: true, message: "Mot de pass non conforme, merci de vérifier vos identifiants."});
            return;
        }

        const loginForm = {
            username: email,
            password: password
        };
        await setRequest({url: `users/signin`, data: loginForm, api: serverAPI});
    }

    useEffect(() => {
        if (response?.status >= 200 || response?.status < 300) {
            dispatch(userActions.login({...response?.data}));
            navigate("/accueil");
        } else if (response) {
            setError({email: true, password: true, message: "Une erreur c'est produite lors de l'authentification, merci de vérifier vos identifiants."});
        }
    }, [response]);

    return (
        <Box sx={{ width: '60%', height: '30%', margin: 'auto', paddingTop: '10%' }}>
            <Card>
                <CardContent>
                    <Stack spacing={2} marginTop={2}>
                        <TextField
                            fullWidth
                            placeholder="Email"
                            required
                            error={error.email}
                            onChange={(event) => setEmail(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            fullWidth
                            placeholder="Mot de passe"
                            type="password"
                            required
                            error={error.password}
                            onChange={(event) => setPassword(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box textAlign='center'>
                            <Button variant="outlined" onClick={() => submit()}>
                                Se connecter
                            </Button>
                        </Box>

                        <Typography variant="body2" color="text.secondary" textAlign="center">
                            Copyright © Somebody Like You 2024.
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
            {(error.email || error.password) && <Alert severity="error">
                <AlertTitle>Erreur</AlertTitle>
                {error.message}
            </Alert>}
        </Box>
    );
};

export default SignIn;
