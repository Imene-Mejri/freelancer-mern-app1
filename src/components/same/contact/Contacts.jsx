import Contact from "./Contact";
import "./contact.css";
import Edit from "./Edit"
import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {alluser } from "../../../redux/action/Users-action"; 

const Contacts = ({user}) => {
  
    const dispatch =useDispatch()
    useEffect(() => {
    dispatch(alluser())
    }, [])  
   const users = useSelector(state => state.users.user) 
   console.log(users)
    return ( 
        <div className="rightbar rightbarWrapper" >
        <div><Edit/></div>
        <div>
        <h4 className="rightbarTitle">Contacts</h4>
        <ul className="rightbarFriendList">
          {users.map((u) => (
            <Contact key={u.id} user={u} />
          ))}
        </ul>
        </div>
        </div>
     );
}
 
export default Contacts;