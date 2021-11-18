
import { Link } from "react-router-dom";
import "./invoice.css"
import { useDispatch,useSelector } from "react-redux";
import SendInnvoice from "./Send";
export default function InvoiceCard({innvoice}) {
  
    const dispatch=useDispatch()
    return (
      <div className='In'>
        <Link to={`/client/Invoices/${innvoice.id}`}>
        <div className='Ininfo'>
            <p class="from">from :{innvoice.sender}</p>
            <p class="object">message :{innvoice.message}</p>
            <p class="object">object :{innvoice.status}</p>
        </div>
        </Link>
        <div className="Ic"> 
            <span><SendInnvoice/></span>
            
            
        </div>
      </div>
    );
  }