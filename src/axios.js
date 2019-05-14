import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguerbuilder-a1ae3.firebaseio.com/'
});

export default instance;