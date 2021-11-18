import axios from 'axios'
import { GET_INNV } from '../action-types/innvoice-action-types'

export const getAcceptedInnvoice =()=>async(dispatch)=>{
    await
    axios.get('https://mern-freelancer-app.herokuapp.com/api/auth/client/innvoice/all')
    .then((res)=>
    dispatch({
        type:GET_INNV,
        payload:res.data
    })

    ).catch((error)=>console.log(error))
}


export const addInnvoice =(newInnvoice)=>async(dispatch)=>{
    await
    axios.post('https://mern-freelancer-app.herokuapp.com/auth/client/innvoice/addInnvoice',newInnvoice)
    .then((res)=>dispatch(getAcceptedInnvoice()))
    .catch((error)=>console.log(error))
}

export const sendInnvoice =(innvoiceId,freelancerId)=>async(dispatch)=>{
    await
    axios.patch(`https://mern-freelancer-app.herokuapp.com/api/auth/client/innvoice/sendInnvoice/${innvoiceId}`,{freelancerId})
    .then((res)=>dispatch(getAcceptedInnvoice()))
    .catch((error)=>console.log(error))
}
