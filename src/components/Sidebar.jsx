import { useState } from 'react';
import styles from '../styles/components/Sidebar.module.scss';
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';
import AssistantSharpIcon from '@mui/icons-material/AssistantSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`d-flex flex-column flex-shrink-0 bg-body-tertiary ${styles.sidebar} ${collapsed ? styles.collapsed : styles.expanded}`}>

      <button
        className={`nav-link py-3 border-bottom rounded-0 ${styles.toggleButton}`}
        onClick={() => setCollapsed(!collapsed)}
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        aria-current="page"
      >
        {collapsed ? (
    <MenuSharpIcon fontSize="small" />
  ) : (
    <span className="if-expanded">
      <MenuOpenSharpIcon fontSize="small" />
    </span>
  )}
      </button>

      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item">
          <a
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${styles.link}`}
            title="Orders"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <MapTwoToneIcon fontSize="small" />
            {!collapsed && <span className='if-expanded'>Explore</span>}
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${styles.link}`}
            title="Orders"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <AddLocationAltSharpIcon fontSize="small" />
            {!collapsed && <span className='if-expanded'>Add Marker</span>}
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${styles.link}`}
            title="Products"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <AssistantSharpIcon fontSize="small" />
            {!collapsed && <span className='if-expanded'>Activities</span>}
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${styles.link}`}
            title="Customers"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <EmojiEventsSharpIcon fontSize="small" />
            {!collapsed && <span className='if-expanded'>Ranking</span>}
          </a>
        </li>
      </ul>



      <div className="dropup border-top">
        <a
          href="#"
          className={`d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle ${styles.toggle}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
          title="Customers"
          data-bs-placement="right"
        >
          <HelpSharpIcon fontSize="small" />
        </a>
        <ul className={`dropdown-menu text-small shadow-lg rounded-0 ${styles.drop}`}>
          <li><a className="dropdown-item" href="#">About PIPO Project</a></li>
          <li><a className="dropdown-item" href="#">Collaborate with Us</a></li>
          <li><a className="dropdown-item" href="#">Faqs About PIPO</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>

  );
};

export default Sidebar;
