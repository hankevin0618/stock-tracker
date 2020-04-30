import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, FormControl, Form, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// 노마드에서 다른 js 파일에서 export 어떻게 하는지 찾아보고 다음 코드 적용할 것
export default function Header() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="/">Stock Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/stocks">Stocks</Nav.Link>
        <Nav.Link href="/quote">Quote</Nav.Link>
        <Nav.Link href="/price-history">Price History</Nav.Link>
      </Nav>
      <Nav className="">
        <Nav.Link href="/stocks">Login</Nav.Link>
        <Nav.Link href="/quote">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
}
