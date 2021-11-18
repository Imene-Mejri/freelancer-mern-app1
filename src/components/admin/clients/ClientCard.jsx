import {HighlightOff} from "@material-ui/icons"
import "./clients.css"
import { deleteProfile } from "../../../redux/action/Users-action";
import { useDispatch } from "react-redux";
export default function ClientCard({user}) {
  const dispatch=useDispatch()
    return (
      <div className='ACl'>
        <div className='AClinfo'>
            <p class="Afrom">{user.name} {user.lastName}</p>
            <p class="Aobject">{user.email}</p>
        </div>
        <div className="AC"> 
            <span onClick={() => dispatch(deleteProfile(user._id))}><HighlightOff/></span>
        </div>
      </div>
    );
  }  