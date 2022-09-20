import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./NavBar.css"


const NavBar = () => {
return (
    <Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="#home">
        Rapsodia Games
        </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#family">Family Games</Nav.Link>
        <Nav.Link href="#sega">Sega Games</Nav.Link>
        </Nav>
        <CartWidget/>
    </Container>
    </Navbar>
)
}

export default NavBar;
