import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome, FaUser, FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar expand="md" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <NavbarBrand href="#">demoLibAI</NavbarBrand>
          <NavbarToggle aria-controls="navClass" />
          <Navbar.Collapse id="navClass">
            <Nav className="ms-auto">
              <Nav.Link href="#">
                <FaHome />
                Home
              </Nav.Link>
              <Nav.Link href="/cart">
                <FaCartArrowDown /> Cart
              </Nav.Link>
              <Nav.Link href="/logIn">
                <FaUser />
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
