import InvoicesCard from "./InvoiceCard";
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getAcceptedInnvoice } from "../../../redux/action/innvoiceClient-action";
import  AddInnvoice  from "./Add";
export default function Invoices()   {
  const dispatch = useDispatch()
useEffect(() => {
dispatch(getAcceptedInnvoice())
}, [])
  const innvoices = useSelector(state => state.innvoice.innvoice?.innvoice1)
  console.log(innvoices)
    return ( 
        <div>
        <p class="title">Invoices :</p>
          {innvoices?.map((innvoice,key) => ( 
          <InvoicesCard innvoice={innvoice} key={innvoice._id} />
         ))}  
       <AddInnvoice/>
        </div>
     );
}
 
