//import "./sidebar.css";
import {Home,Person,NotificationsActive, Edit } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Sidebar() {
  const user = useSelector(state => state.auth.user)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to={`/freelancer/`}>
            <span className="sidebarListItemText">Home</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link to={`/freelancer/Profile`}>
            <span className="sidebarListItemText">Profile</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <NotificationsActive className="sidebarIcon" />
            <Link to={`/freelancer/innvoice`}>
            <span className="sidebarListItemText">Innvoice</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}