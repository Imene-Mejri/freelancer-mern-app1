 import {GET_ALL} from "../action-types/Users-type";
 import axios from "axios";
 /////http://localhost:5000/api/auth/all
export const alluser =()=>async(dispatch)=>{
    try {
      const res = await axios.get("https://mern-freelancer-app.herokuapp.com/api/auth/all")
      dispatch({
        type : GET_ALL,
        payload : res.data
      })
    } catch (error) {
      console.log(error);
    }
  }
  export const deleteProfile =(id)=>async(dispatch)=>{
    await
    axios.delete(`https://mern-freelancer-app.herokuapp.com/api/auth/deleteProfile/${id}`)
    .then((res)=>dispatch(alluser()))
    .catch((error)=>console.log(error))
}


export const updateProfile =(id,user)=>async(dispatch)=>{
    await
    axios.put(`https://mern-freelancer-app.herokuapp.com/api/auth/updateProfile/${id}`,user)
    .then((res)=>dispatch(alluser()))
    .catch((error)=>console.log(error))
}