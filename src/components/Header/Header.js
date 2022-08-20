import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Fix Bug Dao</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link> */}

                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/users" className="nav-link">Users</Link>
                        <Link to="/admin" className="nav-link">Admin</Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>


                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;