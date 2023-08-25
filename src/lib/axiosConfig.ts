import axios from 'axios'
import { apiUrl } from './const';



const Axios = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default Axios;