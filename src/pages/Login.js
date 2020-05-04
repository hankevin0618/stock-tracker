import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import bg_login from "../images/bg_login.jpg";
let sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${bg_login})`,
  backgroundSize: "cover",
};
export default function Login() {
  return (
    <div style={sectionStyle}>
      <div className="contents-container"></div>
    </div>
  );
}
