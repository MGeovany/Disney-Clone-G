import axios from 'axios';

const URL = process.env.DISNEYAPI || 'https://api.disneyapi.dev';

const axiosInstance = axios.create({
    baseURL: URL,
});

export default axiosInstance;