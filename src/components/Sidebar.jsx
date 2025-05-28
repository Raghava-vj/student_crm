import { Link } from 'react-router-dom';
import './Sidebar.css'; 

function Sidebar() {
  return (
    <nav className="sidebar_container border-end p-3" style={{ width: '200px' }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students">Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reports">Reports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
