import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
const NavBarMenu = () => {
  return (
    <Navbar bg="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='textNav link-light' href="#action1">Inicio</Nav.Link>
            <Nav.Link className='textNav link-light' href="#action2">Menu</Nav.Link>
            <Nav.Link className='textNav link-light' href="#action2">Pedidos</Nav.Link>
            <Nav.Link className='textNav link-light' href="#action2">Sobre Nosotros</Nav.Link>
            <Nav.Link className='textNav link-light' href="#action2">Contacto</Nav.Link>
          </Nav>
          <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarMenu