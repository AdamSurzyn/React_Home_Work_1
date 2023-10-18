import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CompName from "./CompName/compName";

function App() {
  return (
    <div className="App">
      <div className="footer">
        <div>
          <CompName compName=""></CompName>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
