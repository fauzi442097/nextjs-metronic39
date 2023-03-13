import { FORM_REDUCER_ACTIONS } from "../enums/FormActions"

type FormReducerType = {
   type: FORM_REDUCER_ACTIONS,
   payload: {
      [key: string] : any
   }
}

export interface IFormReducer {
   state: object,
   action: FormReducerType
}