import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "../components/Searchbar.js";

import bg_home from "../images/bg_home.jpg";

let sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${bg_home})`,
  backgroundSize: "cover",
};

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <div className="test" style={sectionStyle}>
      <Searchbar onSubmit={setSearch} />
    </div>
  );
}
