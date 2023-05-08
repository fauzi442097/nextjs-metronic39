import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


const POST = async <T>(endpoint: string, data : T) => {
   try {
      const response = await axios.post(BASE_URL + endpoint, data, {
         headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            "Authorization": `Bearer ${Cookies.get('token')}`
         }
      });

      return response.data.data;
   } catch ( error ) {
      return Promise.reject(error.response);
   }
}

const DELETE = async <T>(endpoint: string, data? : T) => {
   try {
      const response = await axios.delete(BASE_URL + endpoint, {
         headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            "Authorization": `Bearer ${Cookies.get('token')}`
         }
      });

      return response.data.data;
   } catch ( error ) {
      return Promise.reject(error.response);
   }
}


export const APIRequest = {
   POST,
   DELETE
}