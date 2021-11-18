import FreelancerCard from "./FreelancerCard";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { alluser } from "../../../redux/action/Users-action";

const Freelancers = ({}) => {
  const dispatch = useDispatch()
useEffect(() => {
dispatch(alluser())
}, [])
  const users = useSelector(state => state.users.user)
  
    return ( 
      <div>
      <p class="Ftitle">Freelancers :</p>
      <ul class="FCls">
       {users && (users.filter( (u) => u.role=="freelancer").map((u) => (
          <FreelancerCard key={u._id} user={u} />
        )))} 
      </ul>
      </div>
     );
}
 
export default Freelancers;