import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whatwhatapp.herokuapp.com',
   // baseURL: 'https://messaging-watsapp-mern.herokuapp.com',
});

export default instance;