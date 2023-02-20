import API from "@/lib/axios";

const getProducts = async () => {
   try {
      const response = await API.get('products');
      return response.data.products;
   } catch ( error ) {
      return Promise.reject(error)
   }
}

const getProduct = async (productId: string) => {
   try {
      const response = await API.get(`products/${productId}`);
      return response.data;
   } catch ( error ) {
      return Promise.reject(error)
   }
}

export default {
   getProducts,
   getProduct
}