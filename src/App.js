import "./App.css";
import React from "react";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
        Hi Claudia!
      </BrowserRouter>
    </div>
  );
}

export default App;
