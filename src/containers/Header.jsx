import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">myVill</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Главная</Nav.Link>
            <Nav.Link href="#pricing">Обслуживание</Nav.Link>
            <NavDropdown title="Мои Виллы" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Купить</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Арендовать
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Сдать в аренду</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Продать
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Профиль</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Выход
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header