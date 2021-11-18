
import "./sidebar.css"
import {Computer,AccountBox,InsertDriveFile } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Sidebar() {
  const user = useSelector(state => state.auth.user)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Computer className="sidebarIcon" />
            <Link to={`/admin/`}>
            <span className="sidebarListItemText">Freelancers</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <AccountBox className="sidebarIcon" />
            <Link to={`/admin/clientsList`}>
            <span className="sidebarListItemText">Clients</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <InsertDriveFile className="sidebarIcon" />
            <Link to={`/admin/projectsList`}>
            <span className="sidebarListItemText">Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}