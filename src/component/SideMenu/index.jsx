import React from "react";
import { Nav } from "react-bootstrap";

const SideMenu = () => {
  return (
    <div className="bg-light border-right" id="sidebar">
      <Nav className="flex-row justify-content-end">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
    </div>
  );
};

export default SideMenu;
