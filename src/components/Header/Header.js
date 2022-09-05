import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <NavLink to="/" className="navbar-brand">REACT</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/users" className="nav-link">Users</NavLink>
                        <NavLink to="/admin" className="nav-link">Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className="btn-login" onClick={() => handleLogin()}>Login</button>
                        <button className="btn-signup">Sign up</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;