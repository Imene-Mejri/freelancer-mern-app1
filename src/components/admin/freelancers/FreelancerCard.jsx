import {HighlightOff} from "@material-ui/icons"
import "./freelancer.css"
import { deleteProfile } from "../../../redux/action/Users-action";
import { useDispatch } from "react-redux";
export default function FreelancerCard({user}) {
  const dispatch=useDispatch()
    return (
      <div className='FCl'>
        <div className='FClinfo'>
            <p class="Ffrom">{user.name} {user.lastName}</p>
            <p class="Fobject">{user.email}</p>
        </div>
        <div className="FC"> 
            <span  onClick={() => dispatch(deleteProfile(user._id))}><HighlightOff /></span>
            
        </div>
      </div>
    );
  }  