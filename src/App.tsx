import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cjs } from "./Cjs";
import { Esm } from "./Esm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <Esm />
        <Cjs />
      </header>
    </div>
  );
}

export default App;
