import axios from 'axios'
import { apiUrl } from './const';



const Axios = axios.create({
  baseURL: apiUrl,
  headers: {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  }
});

export default Axios;