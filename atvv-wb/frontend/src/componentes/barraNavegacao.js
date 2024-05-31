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
              { href: "/", text: "Clientes" },
              { href: "/produtos", text: "Produtos" },
              { href: "/servicos", text: "Serviços" },
            ])}
            {renderDropdownItems("CADRASTO", [
              { href: "/cadastrar_cliente", text: "Cliente" },
              { href: "/cadastrar_produto", text: "Produto" },
              { href: "/cadastrar_servico", text: "Serviço" },
            ])}
            {renderDropdownItems("COMPRAS", [
              { href: "/comprar_produtos", text: "Produtos" },
              { href: "/comprar_servicos", text: "Serviços" },
            ])}
            {renderDropdownItems("LISTAS DE PEDIDOS", [
              { href: "/listar_produtos", text: "Pedidos de produtos" },
              { href: "/listar_servicos", text: "Pedidos de serviços" },
            ])}
            <Nav.Link href="/listas">LISTAS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};