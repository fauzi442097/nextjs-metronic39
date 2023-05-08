import axios, { AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
   baseURL: process.env.NEXT_PUBLIC_API_URL,
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   }
}


const API = axios.create(config);
export default API