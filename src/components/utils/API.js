import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=20';

const API = () => axios.get(URL);    

export default API;