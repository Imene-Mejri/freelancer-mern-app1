import { GET_ALL } from "../action-types/project-actiontype";

const initialState={
    project:[],
}
export const projectReducer=(state=initialState, action )=>{
    switch (action.type) {
        
      case  GET_ALL: return {
          ...state,
          project:action.payload
      }
    
        default:return state
           
    }
    }