import React, { useState } from "react";
import { Button, Form, Input, Label, FormGroup } from "reactstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt from "jsonwebtoken";

import bg_loginView from "../images/bg_login.jpg";

const API_URL = "http://131.181.190.87:3000";

const token = localStorage.getItem("token");

// Authorization header
const headers = {
  accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

// Auth
// return fetch(url, { headers })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

// Style Starts
let bg_loginView_page = {
  display: "flex",
  width: "100%",
  height: "800px",
  backgroundImage: `url(${bg_loginView})`,
  backgroundSize: "cover",
};

let whiteBox = {
  backgroundColor: "#ffffffe6",
  width: "700px",
  height: "500px",
  marginTop: "130px",
  borderRadius: "17px",
  boxShadow: "11px 11px 5px #0000002b",
};
// Style Ends

// Toggle the view between Login and Register
function toggle(value) {
  if (value) {
    document.getElementById("toggleValue").innerHTML = "Login";
    document.getElementById("togglePhrase").innerHTML = "Already our member?";
  } else {
    document.getElementById("toggleValue").innerHTML = "Register";
    document.getElementById("togglePhrase").innerHTML =
      "Are you not a member yet?";
  }
  // Clear values in input fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  return (value = !value);
}

//LOGIN Component
function LoginScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Implement LOGIN Function
  function login(username, password) {
    const url = `${API_URL}/user/login`;

    return fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      //   body: JSON.stringify({ email: "example@api.com", password: "asdlkfj1" }),
      body: JSON.stringify({ email: username, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.message);
        } else {
          localStorage.setItem("token", res.token);
          window.location.href = "http://localhost:3000/";
        }
      });
  }

  // Implement Register Function
  function register(username, password) {
    const url = `${API_URL}/user/register`;

    return fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      //   body: JSON.stringify({ email: "example@api.com", password: "asdlkfj1" }),
      body: JSON.stringify({ email: username, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
        } else {
        }
      });
  }

  // Login Form
  if (props.loginScreen) {
    return (
      <div>
        <h1>Login</h1>
        <Form style={{ textAlign: "left", margin: "100px 100px 25px 100px" }}>
          <Label for="username">Email</Label>
          <Input
            type="email"
            name="email"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            className="mt-3"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              login(username, password);
            }}
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
  //   Register Form
  else {
    return (
      <div>
        <h1>Register</h1>
        <Form style={{ textAlign: "left", margin: "100px 100px 25px 100px" }}>
          <Label for="username">Email</Label>
          <Input
            type="email"
            name="email"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            className="mt-3"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              register(username, password);
            }}
          >
            Register
          </Button>
        </Form>
      </div>
    );
  }
}
export default function LoginPage() {
  const [loginView, setLoginView] = useState(true);

  return (
    <div className="align-item-center" style={bg_loginView_page}>
      <div className="loginView-box mx-auto" style={whiteBox}>
        <Form>
          <LoginScreen loginScreen={loginView} />
          <FormGroup>
            <p id="togglePhrase">Are you not a member yet?</p>
            <Button
              className=""
              onClick={() => {
                setLoginView(toggle(loginView));
              }}
            >
              <p id="toggleValue" className="m-0">
                Register
              </p>
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
