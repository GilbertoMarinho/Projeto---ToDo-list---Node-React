import axios from 'axios';

//conexão com o backend através da porta 3001
const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export default api;