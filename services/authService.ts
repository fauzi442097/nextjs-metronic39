import API from "@/lib/axios";

type dataLogin = {
   email: string,
   password: string
}

const loginService = async (data: dataLogin) => {
   try {
      const response = await API.post('login', data);
      return response.data;
   } catch ( error ) {
      return Promise.reject(error);
   }
}

export default {
   loginService
}