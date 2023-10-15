import React from "react";
import style from "./Medals.css";

const Medal = ({ amount, color }) => {
  return (
    <div className="medal">
      <div className="amount">{amount}</div>
      <div className="color">{color}</div>
    </div>
  );
};

export default Medal;
