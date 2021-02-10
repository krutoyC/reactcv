import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FontawesomeIcom} from "@fortawesome/react-fontawesome";
import {faAtom} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <Navbar bg="dark" expand="dark" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Navbar.Brand href="#home">
    {/* <div style={{fontSize:"10em", color:"white"}}><FontawesomeIcom icon={faAtom}/></div> */}
    <h5>React-Bootstrap</h5>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home" className="active">Inicio</Nav.Link>
      <Nav.Link href="#link" className="active">Admin</Nav.Link>
      <NavDropdown title="Categorias" id="basic-nav-dropdown" className="active">
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
