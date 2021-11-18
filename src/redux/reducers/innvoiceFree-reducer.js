import { GET_INNV } from "../action-types/innvoice-action-types"
const initialState={
    innvoice2:[],
}
export const innvoiceFreeReducer=(state=initialState, action )=>{
    switch (action.type) {
        
      case  GET_INNV: return {
          ...state,
          innvoice2:action.payload
      }
    
        default:return state
           
    }
    }