import ClientCard from "./ClientCard";
/* import {Users} from "../../../fake" */
import "./clients.css"
 import { useEffect } from "react";
 import {useSelector,useDispatch} from 'react-redux'
import {alluser } from "../../../redux/action/Users-action"; 

const Clients = ({}) => {
  
 const dispatch =useDispatch()
  useEffect(() => {
  dispatch(alluser())
  }, [])  
   const users = useSelector(state => state.users.user) 
   console.log(users)

    return ( 
        <div>
        <p class="Atitle">Clients :</p>
        <ul class="Acls">


        {users && (users.filter( (u) => u.role=="client").map((user) => (
            <ClientCard  key={user._id} user={user} />
          )))}
        {/*  {users?.map((user) => (
            <ClientCard  user={user} />
          ))}  */}
        </ul>
        </div>
     );
}
 
export default Clients;