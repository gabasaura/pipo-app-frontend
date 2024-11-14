/// PipoNavbar.tsx
import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../store/AppContext';
import { useNavigate } from "react-router-dom";
import pipoLogo from '../assets/pipo-app.svg'
import styles from '../styles/components/TopNavbar.module.scss';
import { Avatar } from '@mui/material';


function PipoNavbar() {
  const { store, actions } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (store.access_token !== null) navigate("/")
  }, [store.access_token, navigate])



  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      {/* Logo */}
      <div className={`navbar-brand ${styles.logo}`}>
        <Link className="navbar-brand" to="/">
          <img className="logo" src={pipoLogo} alt="pipo app" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="d-flex justify-content-center flex-grow-1">
        <form className="d-flex w-75" role="search">
          <input
            className={`form-control rounded-pill ${styles.searchInput}`}
            type="search"
            placeholder="Search for nearest restroom"
            aria-label="Search"
          />
        </form>
      </div>

      {/* Profile Dropdown */}
      <div className={`dropdown ${styles.profileDropdown}`}>
        <button
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Avatar src="https://github.com/mdo.png" alt="mdo" sx={{ width: 24, height: 24 }} />
        </button>
        <ul className="dropdown-menu dropdown-menu-end text-small shadow-lg rounded-0" aria-labelledby="dropdownMenuButton">
          {store.access_token ? (
            <>
              <li>
                <Link to="/register" className="dropdown-item">Sign up</Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={`dropdown-item ${location.pathname === '/login' ? 'active' : ''}`}
                >
                  Sign in
                </Link>
              </li>
            </>
          ) : (
            <>
              <li><hr className="dropdown-divider" /></li>
              {store.current_user?.admin && (
                <li>
                  <Link to="/piposlist" className="dropdown-item">Moderator</Link>
                </li>
              )}
              <li>
                <Link to="/userprofile" className="dropdown-item">Profile</Link>
              </li>
              <li>
                <Link to="/signout" className="dropdown-item" onClick={actions.logout}>Sign out</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default PipoNavbar;