import { FORM_REDUCER_ACTIONS } from "@/utils/enums/FormActions"
import { IFormReducer } from "@/utils/interfaces/IFormReducer"

export type formProduct = {
   title: string,
   description: string,
   brand: string
}

type productState = {
   isFormValid: boolean,
   form: formProduct
}

export const initialProductState : productState = {
   isFormValid: true,
   form: {
      title: '',
      description: '',
      brand: ''
   }
}

export const productReducer = ( state: productState, action: IFormReducer ) => {
   const { type, payload } = action;

   switch ( type ) {
      case FORM_REDUCER_ACTIONS.CHANGE_INPUT:
         return {
            ...state,
            form: {
               ...state.form,
               [payload.name] : payload.value
            }
         }
      case FORM_REDUCER_ACTIONS.SET_VALUE:
         return {
            ...state,
            form: payload
         }
      case FORM_REDUCER_ACTIONS.SET_FORM_STATUS:
         return {
            ...state,
            isFormValid: payload.isFormValid
         }
      default: 
         return state
   }
}  