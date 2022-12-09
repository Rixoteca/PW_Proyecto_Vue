import { baseURL } from '../utils/constantes'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL
});

axiosInstance.interceptors.response.use(({data}) => data);

export default axiosInstance
