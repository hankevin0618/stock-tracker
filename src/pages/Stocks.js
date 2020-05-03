import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStocks } from "../components/api.js";

function SayIt(props) {
  return <h1>{props.title}</h1>;
}

export default function Stocks() {
  const { search, setSearch } = useState("");
  const { stocks } = useStocks([]);

  return (
    <div>
      <h1>Stocks</h1>
      {/* {console.log(stocks)} */}
      {/*여기다가 스톡을 불러와서 이제 그려넣어야되는데 그게 안됨. 콘솔로그도 안됨 근데 여기다 agGrid쓸생각인데 그렇게 한번해보자*/}
    </div>
  );
}
