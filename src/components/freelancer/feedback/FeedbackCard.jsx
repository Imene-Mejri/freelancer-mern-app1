import SendInnvoice from './Send';
import {Link} from 'react-router-dom';
import "./feedback.css"
//import { useDispatch } from "react-redux";
export default function FeedbackCard({feedback}) {
    //const dispatch=useDispatch()
    return (
      <div className='In'>
        <Link to={`/client/Invoices/${feedback.id}`}>
        <div className='Ininfo'>
            <p class="from">from :{feedback.sender}</p>
            <p class="object">message :{feedback.message}</p>
            <p class="object">object :{feedback.status}</p>
        </div>
        </Link>
        <div className="Ic"> 
            <span><SendInnvoice/></span> 
        </div>
      </div>
    );
  }