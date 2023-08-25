import axios from 'axios'
import { apiUrl } from './const';



const Axios = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Methods': undefined,
    "Access-Control-Allow-Headers": undefined,
  }
});

export default Axios;