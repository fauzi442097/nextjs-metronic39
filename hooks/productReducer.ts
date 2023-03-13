import { FORM_REDUCER_ACTIONS } from "@/utils/enums/FormActions"
import { IFormReducer } from "@/utils/interfaces/IFormReducer"

export const productInitialState = {
   title: '',
   description: '',
   brand: ''
}

export const productReducer = ({state, action} : any) => {
   const { type, payload } = action;
   switch ( type ) {
      case FORM_REDUCER_ACTIONS.CHANGE_INPUT:
         return {
            ... state,
            [payload.name] : payload.value
         }
      default: 
         return state
   }
}  