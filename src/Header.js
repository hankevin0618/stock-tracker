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
        <Nav.Link href="#home">Stocks</Nav.Link>
        <Nav.Link href="#features">Quote</Nav.Link>
        <Nav.Link href="#pricing">Price History</Nav.Link>
      </Nav>
      <Form inline>{/* 여기다가 로그인 & 회원가입 버튼 */}</Form>
    </Navbar>
  );
}
