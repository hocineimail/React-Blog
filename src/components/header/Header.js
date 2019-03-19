import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'

import Link from 'react-router-dom'


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
      <Nav.Link href="/addpost"><i className="fas fa-plus"></i> &nbsp; Add Post</Nav.Link>
     
    </Nav>
    <Nav>
    <Nav.Link ><i className="fas fa-rss"></i> &nbsp;Blog</Nav.Link>
      <Nav.Link href="/about"><i className="fas fa-question"></i> &nbsp;About</Nav.Link>
      <Nav.Link href="/contactme"><i className="far fa-envelope-open"></i> &nbsp;Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>;
      </div>
    )
  }
}

export default Header;