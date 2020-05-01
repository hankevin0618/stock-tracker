import React, { useState } from "react";

const API_URL = "http://131.181.190.87:3000";

function GetStocks() {
  const url = `${API_URL}/stocks/symbols`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data)); // 데이터를 가져오긴 함!!
}

export default function MyAPI() {
  return (
    <div>
      <h1>This is API</h1>
      <GetStocks />
    </div>
  );
}
