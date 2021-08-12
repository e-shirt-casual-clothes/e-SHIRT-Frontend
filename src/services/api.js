import axios from 'axios';

const api = axios.create({
    baseURL: "https://e-shirt-api.herokuapp.com",
});

export default api;
