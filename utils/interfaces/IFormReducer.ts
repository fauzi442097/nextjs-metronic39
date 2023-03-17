import { FORM_REDUCER_ACTIONS } from "../enums/FormActions"

export interface IFormReducer {
   type: FORM_REDUCER_ACTIONS,
   payload: any
}