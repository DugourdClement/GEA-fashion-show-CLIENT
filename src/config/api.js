import axios from 'axios';

const serverAPI = axios.create({
    baseURL: ""
});


export {
    serverAPI,
};
