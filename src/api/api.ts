import axios from 'axios';
import { API_URL } from './api.config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'useQueryString': true,
  },
});

export default api;
