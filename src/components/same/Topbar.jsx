import "./topbar.css";
import { Button } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import { Search, Person, Chat, Notifications,  } from "@material-ui/icons";
import {FiLogOut} from "react-icons/fi";
import { Link } from "react-router-dom";
import { logoutHandler } from "../../redux/action/auth-action";
export default function Topbar() {
    const dispatch = useDispatch()
    const logoutUser=()=>{
        dispatch(logoutHandler())
        
          }
    const user = useSelector(state => state.auth.user)
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}><span className="logo">first App</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends or freelancers"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <FiLogOut onClick={logoutUser}/>
          </div>
        </div>
        <Link to={`${user.role}/Profile/${user.name}`}>
          <img
            src='/images/profile.png'
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}