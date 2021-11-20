import './profile.css'
import Projects from "../freelancer/project/Projects" 
import {useDispatch, useSelector} from "react-redux"
import Contacts from '../same/contact/Contacts'
import { useEffect } from 'react'
import { getAuthUser } from '../../redux/action/auth-action'
import Edit from '../same/contact/Edit'
const Profile = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAuthUser())
  },[])
    const user = useSelector(state => state.auth.user)
    console.log(user)
    return ( 
        <div className="FprofileRightTop">
            <div className="FprofileCover">
              <img className="FprofileCoverImg" src='/images/1.jpeg' alt="" />
              <img className="FprofileUserImg" src='/images/profile.png' />
            </div>
            <div className="FprofileInfo">
              <h4 className="FprofileInfoName">{user.name} {user.lastName}</h4>
              <span className="FprofileInfoDesc">{user.email} </span>
              <Edit/>
            </div>
          
            <div className='FprofileData'>
            <Projects/>
            <div className='Fcright'>
            {/* <Contacts/> */}
            </div>
            </div>
        </div>
     );
}
 
export default Profile;