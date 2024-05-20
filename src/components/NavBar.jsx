import { Container, Navbar, Nav, Offcanvas, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Context } from '../store/AppContext';
import { FaRegMap } from "react-icons/fa";
import pipoLogo from '../assets/pipo-app.svg'
import { useNavigate} from "react-router-dom";


function PipoNavbar() {
    const { store, actions } = useContext(Context);
    const location = useLocation();


    const navigate = useNavigate()
    useEffect(() => {
        if (store.access_token !== null) navigate("/")
    }, [store.access_token])
    


    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/"><img className='logo' src={pipoLogo} alt="pipo app" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <OffcanvasHeader closeButton>
                            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}><FaRegMap size={35} />
                            </Nav.Link>
                        </OffcanvasHeader>
                        <Offcanvas.Body>
                            <Nav className="flex m-auto">

                                <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Nav.Link>
                                <Nav.Link as={Link} to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>Faq</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Nav.Link>
                                {!!store.access_token ? (
                                    <>
                                        <Nav.Link as={Link} to="/userprofile" className={location.pathname === '/userprofile' ? 'active' : ''}>User Profile</Nav.Link>
                                        <Nav.Link as={Link} to="/pipoform" className={location.pathname === '/pipoform' ? 'active' : ''}>Add Pipo</Nav.Link>
                                        {store.current_user?.admin && (
                                            <Nav.Link as={Link} to="/piposlist" className={location.pathname === '/piposlist' ? 'active' : ''}>Pipo List</Nav.Link>
                                        )}
                                        <Nav.Link as={Link} to="/" className={"nav-link " + (location.pathname === "/" ? "active" : "")} onClick={actions.logout}>Log Out</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link as={Link} to="/login" className={location.pathname === '/login' ? 'active' : ''}>Log In</Nav.Link>
                                        <Nav.Link as={Link} to="/register" className={location.pathname === '/register' ? 'active' : ''}>Sign Up</Nav.Link>
                                    </>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}

export default PipoNavbar