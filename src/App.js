import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import bg_home from "./images/bg_home.jpg";

let sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${bg_home})`,
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="test" style={sectionStyle}></div>
    </div>
  );
}

export default App;
