import { useEffect } from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './NavHeader.css'

function NavHeader(props) {
  const { pages, currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = `Stephanie Portfolio | ${currentPage.name}`
  }, [currentPage])

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navName" href="#home">STEPHANIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {pages.map((page) => (
              <NavLink 
                className={`${currentPage.name === page.name && "active-link" }`}
                onClick={()=>setCurrentPage(page)}
              >
                {page.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;