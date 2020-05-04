import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="/">Stock Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/stocks">Stocks</Nav.Link>
        <Nav.Link href="/quote">Quote</Nav.Link>
        <Nav.Link href="/price-history">Price History</Nav.Link>
      </Nav>
      <Nav className="">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/login">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
}
