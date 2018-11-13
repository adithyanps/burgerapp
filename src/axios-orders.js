import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-e12c6.firebaseio.com/'
});

export default instance;
