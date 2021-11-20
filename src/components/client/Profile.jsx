import './profile.css'
import Projects from "./profil/Projects" 
import {useSelector} from "react-redux"
import Edit from '../same/contact/Edit'

import Contacts from '../same/contact/Contacts'
const Profile = () => {
    const user = useSelector(state => state.auth.user)
    return ( 
        <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src='/images/1.jpeg' alt="" />
              <img className="profileUserImg" src='/images/profile.png' />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.name} {user?.lastName}</h4>
              <span className="profileInfoDesc">{user?.email} </span>
             <Edit/>
            </div>

            <div className='profileData'>
            <Projects/>
            <div className='cright'>
           {/*  <Contacts/> */}
            </div>
            </div>
        </div>
     );
}
 
export default Profile;