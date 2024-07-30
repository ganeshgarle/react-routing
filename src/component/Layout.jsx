import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Nav } from "react-bootstrap";

const Layout = () => {
  const navigateTo = useNavigate();
  return (
    <div className="bg-light border-right" id="sidebar">
      <Nav className="flex-row justify-content-end">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/teams">Team</Nav.Link>
        <Nav.Link href="/blogs">Blogs</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Button
          className="loginBtn"
          variant="primary"
          onClick={() => {
            localStorage.setItem("isLoggedIn", "false");
            navigateTo("/");
          }}
        >
          Logout
        </Button>
      </Nav>
    </div>
  );
};

export default Layout;
