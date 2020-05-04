import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header.js";

// Pages
import Home from "./pages/Home.js";
import Stocks from "./pages/Stocks.js";
import Quote from "./pages/Quote.js";
import PriceHistory from "./pages/Price-history.js";
import Login from "./pages/Login.js";

// Others

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/stocks">
            <Stocks />
          </Route>
          <Route exact path="/quote">
            <Quote />
          </Route>
          <Route exact path="/price-history">
            <PriceHistory />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
