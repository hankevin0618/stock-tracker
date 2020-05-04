import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import bg_loginView from "../images/bg_login.jpg";

const API_URL = "http://131.181.190.87:3000";
const url = `${API_URL}/user/login`;

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

function toggle(value) {
  return (value = !value);
}

function LoginScreen(props) {
  function login() {
    return fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: "example@api.com", password: "asdlkfj1" }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  if (props.screen) {
    return (
      <div>
        <h1>Login</h1>
        <Button onClick={login}>Login</Button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Register</h1>
      </div>
    );
  }
}
export default function LoginPage() {
  const [loginView, setloginView] = useState(true);
  const [buttonValue, setbuttonValue] = useState("Register");

  return (
    <div className="align-item-center" style={bg_loginView_page}>
      <div className="loginView-box mx-auto" style={whiteBox}>
        <LoginScreen screen={loginView} />
        <Button
          className="mt-4"
          onClick={() => {
            setloginView(toggle(loginView));
          }}
        >
          {
            buttonValue /* 이게 로그인땐 레지스터 아님 반대로 되야되는데 잘 안됨. 안에 내용물이 바뀌게끔 할수있을까 */
          }
        </Button>
      </div>
    </div>
  );
}
