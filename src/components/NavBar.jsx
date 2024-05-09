// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Context } from "../store/AppContext";



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { store, actions } = useContext(Context)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PIPO</Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end text-bg-dark ${isMenuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">PIPO</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={toggleMenu} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/contact">CONTACT</Link>
                            </li>
                            {!!store.access_token ? (
                                <>
                                    <li className="nav-item">
                                        <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/userprofile">USER PROFILE</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/pipoform">ADD PIPO</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/" onClick={actions.logout}> LOG OUT</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/login">LOGIN</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={"nav-link " + (location.pathname === "/" ? "active" : "")} to="/register">REGISTER</Link>
                                    </li>
                                </>
                            )
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;