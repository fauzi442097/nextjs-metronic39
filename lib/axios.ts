import axios, { AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
   baseURL: 'https://dummyjson.com',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 10192'
   }
}

const API = axios.create(config);

export default API