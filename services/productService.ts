import API from "@/lib/axios";

const getProducts = async () => {
   try {
      const response = await API.get('products');
      return response.data.products;
   } catch ( error ) {
      return error 
   }
}

const getProduct = async (productId: string) => {
   try {
      const response = await API.get(`products/${productId}`);
      return response.data;
   } catch ( error ) {
      return error
   }
}

export default {
   getProducts,
   getProduct
}