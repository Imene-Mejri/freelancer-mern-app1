
import "./sidebar.css"
import {Home,Person,NotificationsActive, InsertDriveFile } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import Addproject from "./addProject";

export default function Sidebar() {
  const user = useSelector(state => state.auth.user)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to={`/client/`}>
            <span className="sidebarListItemText">Home</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link to={`/client/profile/${user.name}`}>
            <span className="sidebarListItemText">Profile</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <NotificationsActive className="sidebarIcon" />
            <Link to={`/client/innvoice`}>
            <span className="sidebarListItemText">Invoices</span>
            </Link>
          </li>
          <li>
            <Addproject/>
          </li>
        </ul>
      </div>
    </div>
  );
}