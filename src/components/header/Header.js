import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'

import NavDropdown from 'react-bootstrap/NavDropdown'

 class Header extends Component {
  render() {
    return (
      <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<div className="container">
  <Navbar.Brand href="/">React-BLOG</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/addpost"><i class="fas fa-plus"></i> Add Post</Nav.Link>
     
    </Nav>
    <Nav>
    <Nav.Link href="/"><i class="fas fa-rss"></i>Blog</Nav.Link>
      <Nav.Link href="/about"><i class="fas fa-question"></i>About</Nav.Link>
      <Nav.Link href="/contactme"><i class="far fa-envelope-open"></i>Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>;
      </div>
    )
  }
}

export default Header;