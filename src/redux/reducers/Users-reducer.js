import {  GET_ALL } from "../action-types/Users-type"

const initialState={
   
    users:[]
}

export const  usersReducer=(state=initialState,action)=>{
switch (action.type) {

case GET_ALL:return{
    ...state,
    user:action.payload
}
    default:return state   
}
}