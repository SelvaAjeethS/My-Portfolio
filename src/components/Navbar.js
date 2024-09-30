import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';


function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand className='mx-4'>
        <Link to="home" smooth={true} duration={300}>
          <img
            src="/assets/logo.png"
            width="33" // Set logo width
            height="33" // Set logo height
            className="d-inline-block align-top"
            alt="Logo"
          />
          My Portfolio</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link to="about" smooth={true} duration={300} className="nav-link" activeClass="active" spy={true}>About</Link>
          <Link to="projects" smooth={true} duration={300} className="nav-link" activeClass="active" spy={true}>Projects</Link>
          <Link to="skills" smooth={true} duration={300} className="nav-link" activeClass="active" spy={true}>Skills</Link>
          <Link to="contact" smooth={true} duration={300} className="nav-link" activeClass="active" spy={true}>Contact</Link>
        </Nav>
        <Nav className="ml-auto mx-4">
          <Button
            id="github-button"
            href="https://github.com/SelvaAjeethS"
            target="_blank"
            variant="outline-info"
          >
            GitHub
          </Button>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar