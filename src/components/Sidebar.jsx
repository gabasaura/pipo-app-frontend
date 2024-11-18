import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../store/AppContext';
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
  const { store, actions } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (store.access_token !== null) navigate("/")
  }, [store.access_token, navigate])



  return (
    <div className={`d-flex flex-column flex-shrink-0 bg-body-tertiary ${styles.sidebar} ${collapsed ? styles.collapsed : styles.expanded}`}>

      <button
        className={`nav-link py-3 border-bottom rounded-0 ${styles.toggleButton}`}
        onClick={() => setCollapsed(!collapsed)}
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        aria-current="page"
      >
        
          <MenuSharpIcon fontSize="small" />
          {!collapsed && <span className='if-expanded'>Explore</span>}
          
      </button>

      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <Link className={`nav-link py-3 border-bottom rounded-0 ${styles.link}`} to="/">
            <MapTwoToneIcon fontSize="small" />
            {!collapsed && <span className='if-expanded'>Explore</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/addmarker"  // Cambia a la ruta adecuada
            className={`nav-link py-3 border-bottom rounded-0 ${styles.link}`}
            title="Orders"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <AddLocationAltSharpIcon fontSize="small" />
            {!collapsed && <span className='if-expanded'>Add Marker</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/useractivities"  // Cambia a la ruta adecuada
            className={`nav-link py-3 border-bottom rounded-0 ${styles.link}`}
            title="Products"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <AssistantSharpIcon fontSize="small" />
            {!collapsed && <span className='if-expanded'>Activities</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/userrank"  // Cambia a la ruta adecuada
            className={`nav-link py-3 border-bottom rounded-0 ${styles.link}`}
            title="Customers"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <EmojiEventsSharpIcon fontSize="small" />
            {!collapsed && <span className='if-expanded'>Ranking</span>}
          </Link>
        </li>
      </ul>



      <div className="dropup border-top">
        <Link
          to="#"
          className={`d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle ${styles.toggle}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
          title="Customers"
          data-bs-placement="right"
        >
          <HelpSharpIcon fontSize="small" />
        </Link>
        <ul className={`dropdown-menu text-small shadow-lg rounded-0 ${styles.drop}`}>
          <li><Link className="dropdown-item" to="/about">About PIPO Project</Link></li>
          <li><Link className="dropdown-item" to="/collaborate">Collaborate with Us</Link></li>
          <li><Link className="dropdown-item" to="/faqs">Faqs About PIPO</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>

  );
};

export default Sidebar;
