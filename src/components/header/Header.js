import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'



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
      <Nav.Link href="/addpost"><i className="fas fa-plus"></i> Add Post</Nav.Link>
     
    </Nav>
    <Nav>
    <Nav.Link href="/"><i className="fas fa-rss"></i>Blog</Nav.Link>
      <Nav.Link href="/about"><i className="fas fa-question"></i>About</Nav.Link>
      <Nav.Link href="/contactme"><i className="far fa-envelope-open"></i>Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>;
      </div>
    )
  }
}

export default Header;