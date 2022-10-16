import axios from 'axios';

const axiosCLient = axios.create({
    baseURL: 'https://api.open-meteo.com/',
    timeout: 20000,
});

export default axiosCLient;
