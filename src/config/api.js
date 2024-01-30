import axios from 'axios';

const serverAPI = axios.create({
    baseURL: "https://saes5mode.alwaysdata.net/"
});


export {
    serverAPI,
};
