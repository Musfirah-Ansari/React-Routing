import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layoutcomp = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">React Routing Assignment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/about">Why Choose Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Our Team</Nav.Link>
                            <Nav.Link as={Link} to="/faq">Help Center</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container" style={{ marginTop: '30px' }}>
                <Outlet />
            </div>
        </>
    );
};

export default Layoutcomp;