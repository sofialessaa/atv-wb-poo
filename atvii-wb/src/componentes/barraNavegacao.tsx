import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./styles.scss";

interface NavItem {
  href: string;
  text: string;
}

export default class BarraNavegacao extends Component {
  renderDropdownItems(title: string, items: NavItem[]) {
    return (
      <NavDropdown title={title} id={`basic-nav-dropdown-${title.toLowerCase()}`}>
        {items.map((item: NavItem, index: number) => (
          <NavDropdown.Item key={index} href={item.href}>
            {item.text}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  }

  render() {
    return (
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/">World Beauty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {this.renderDropdownItems("REGISTROS", [
                { href: "/", text: "Clientes" },
                { href: "/produtos", text: "Produtos" },
                { href: "/servicos", text: "Serviços" },
              ])}
              {this.renderDropdownItems("CADRASTO", [
                { href: "/cadastrar_cliente", text: "Cliente" },
                { href: "/cadastrar_produto", text: "Produto" },
                { href: "/cadastrar_servico", text: "Serviço" },
              ])}
              {this.renderDropdownItems("COMPRAS", [
                { href: "/comprar_produtos", text: "Produtos" },
                { href: "/comprar_servicos", text: "Serviços" },
              ])}
              {this.renderDropdownItems("LISTAS DE PEDIDOS", [
                { href: "/listar_produtos", text: "Pedidos de produtos" },
                { href: "/listar_servicos", text: "Pedidos de serviços" },
              ])}
              <Nav.Link href="/listas">LISTAS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
