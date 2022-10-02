import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css"


const NavBar = () => {
return (
    <Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand as={Link} to="/" href="#Games">
        Rapsodia Games
        </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>    
        <Nav.Link as={Link} to="/category/Family Games">Family Games</Nav.Link>
        <Nav.Link as={Link} to="/category/Sega Games">Sega Games</Nav.Link>
        </Nav>
        <CartWidget/>
    </Container>
    </Navbar>
)
}

export default NavBar;
