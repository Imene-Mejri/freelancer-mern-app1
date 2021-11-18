import { GET_INNV } from "../action-types/innvoice-action-types"
const initialState={
    innvoice:[],
}
export const innvoiceClientReducer=(state=initialState, action )=>{
    switch (action.type) {
        
      case  GET_INNV: return {
          ...state,
          innvoice:action.payload
      }
    
        default:return state
           
    }
    }