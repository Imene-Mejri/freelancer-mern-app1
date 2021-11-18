import axios from 'axios'
import { GET_INNV } from '../action-types/innvoice-action-types'


export const getAllinnvoice =() => async (dispatch) =>{
    await
    axios.get(`http://localhost:5000/api/auth/freelancer/innvoice/all`)
    .then((res)=>
    dispatch({
        type:GET_INNV,
        payload:res.data
    })

    ).catch((error)=>console.log(error))
}
export const  getInprocess = (freelancerId)=>async(dispatch)=>{
    await
    axios.get(`http://localhost:5000/api/auth/freelancer/innvoice/findInprocess/${freelancerId}`)
    .then((res)=>dispatch(getAllinnvoice()))
    .catch((error)=>console.log(error))
}



export const sendInnvoice = async (innvoiceId,freelancerId)=>async(dispatch)=>{
    await
    axios.patch(`http://localhost:5000/api/auth/freelancer/innvoice/status/${innvoiceId}`,{freelancerId})
    .then((res)=>dispatch(getAllinnvoice()))
    .catch((error)=>console.log(error))
}