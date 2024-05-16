import { Container, Navbar, Nav, Offcanvas, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/AppContext';
import '../styles/navbar.css';

function PipoNavbar() {
    const { store, actions } = useContext(Context);
    const location = useLocation();

    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">PIPO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <OffcanvasHeader closeButton>
                        <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>BACK TO MAP</Nav.Link>
                        </OffcanvasHeader>
                        <Offcanvas.Body>
                            <Nav className="flex m-auto">
                                
                                <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Nav.Link>
                                <Nav.Link as={Link} to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Nav.Link>
                                {!!store.access_token ? (
                                    <>
                                        <Nav.Link as={Link} to="/userprofile" className={location.pathname === '/userprofile' ? 'active' : ''}>USER PROFILE</Nav.Link>
                                        <Nav.Link as={Link} to="/pipoform" className={location.pathname === '/pipoform' ? 'active' : ''}>ADD PIPO</Nav.Link>
                                        {store.current_user?.admin && (
                                            <Nav.Link as={Link} to="/piposlist" className={location.pathname === '/piposlist' ? 'active' : ''}>PIPO LIST</Nav.Link>
                                        )}
                                        <Nav.Link onClick={actions.logout}>LOG OUT</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link as={Link} to="/login" className={location.pathname === '/login' ? 'active' : ''}>LOGIN</Nav.Link>
                                        <Nav.Link as={Link} to="/register" className={location.pathname === '/register' ? 'active' : ''}>REGISTER</Nav.Link>
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