import React, { useState, useEffect } from "react";

const API_URL = "http://131.181.190.87:3000";

function getStocks() {
  const url = `${API_URL}/stocks/symbols`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) =>
      data.map((info) => ({
        name: info.name,
        industry: info.industry,
        symbol: info.symbol,
      }))
    );

  // .then((test) => console.log(test.name));
}
export function useStocks() {
  //   const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    getStocks().then((data) =>
      data.map((info) => {
        stocks.push(info);
      })
    );
  });

  return { stocks }; // 애네를 newsheadlines가 아니라 stocktracker에 맞게 바꿔줘야함
}
