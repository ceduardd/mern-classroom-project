import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useLogin } from '../LoginProvider';

const Header = () => {
  const loginState = useLogin();

  return (
    <header className="m-0">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Classroom App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {!loginState?.isLogged && (
                <>
                  <LinkContainer to="/">
                    <Nav.Link>
                      <i className="fas fa-user mr-2"></i>Iniciar Sesión
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>
                      <i className="fas fa-user-plus mr-2"></i>Registrarse
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}

              {loginState?.isLogged && (
                <LinkContainer to="/" onClick={() => loginState?.logout()}>
                  <Nav.Link>
                    <i className="fas fa-sign-out-alt mr-2"></i>Cerrar Sesión
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
