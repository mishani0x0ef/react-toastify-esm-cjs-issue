import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cjs } from "./Cjs";
import { Esm } from "./Esm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToastContainer />
        <Esm />
        <Cjs />
      </header>
    </div>
  );
}

export default App;
