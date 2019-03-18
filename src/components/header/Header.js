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
  <Navbar.Brand href="#home">React-BLOG</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Nav>
      <Nav.Link href="#deets"><i class="fas fa-plus"></i> Add Post</Nav.Link>
      <Nav.Link href="#deedts">About</Nav.Link>
      <Nav.Link href="#deedts">Blog</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>;
      </div>
    )
  }
}

export default Header;