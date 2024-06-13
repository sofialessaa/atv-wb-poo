import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./styles.css";

export default function BarraNavegacao(props) {
  const renderDropdownItems = (title, items) => {
    return (
      <NavDropdown title={title} id={`basic-nav-dropdown-${title.toLowerCase()}`}>
        {items.map((item, index) => (
          <NavDropdown.Item key={index} href={item.href}>
            {item.text}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">World Beauty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {renderDropdownItems("REGISTROS", [
              { href: "/clientes", text: "Clientes" },
            ])}
            {renderDropdownItems("CADRASTO", [
              { href: "/cadastrar", text: "Cliente" },
            ])}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};