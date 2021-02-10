import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillLightningFill } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      expand="dark"
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      fixed

    >
      <Navbar.Brand href="/">
        <h5 style={{ fontSize: "2em", color: "white" }}>
          <BsFillLightningFill />
        </h5>
      </Navbar.Brand >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto tex-bold" style={{fontSize:"1em"}}>
          <Nav.Link href="#home" className="active">
            Inicio
          </Nav.Link>
          <Nav.Link href="#link" className="active">
            Admin
          </Nav.Link>
          <NavDropdown
            title="Categorias"
            id="basic-nav-dropdown"
            className="active"
          >
            <NavDropdown.Item href="#action/3.1">Datos </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Estudios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Experiencia</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
