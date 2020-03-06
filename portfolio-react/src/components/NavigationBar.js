
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function NavigationBar() {
  
    return (
        <Navbar expand="lg">
        <Link to={"/"} className={"navbar-brand"}>Chuck's Portfolio</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar.nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to={"/portfolio"} className={"nav-link"}>Portfolio</Link>
          </Nav.Item>
            <Nav.Item>
              <Link to={"contact"} className={"nav-link"}>Contact</Link>
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
