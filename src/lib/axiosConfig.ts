import axios from 'axios'
import { apiUrl } from './const';



const Axios = axios.create({
  baseURL: apiUrl,
});

export default Axios;