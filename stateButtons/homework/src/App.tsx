import React from "react";

import "./App.css";
import { useState } from "react";

interface Human {
  human: {
    sex: "man" | "woman";
    surname: string;
  };
  accountBalance: number;
}
const initData: Human = {
  human: {
    sex: "woman",
    surname: "Detic",
  },
  accountBalance: 1000,
};

function App() {
  const [data, setData] = useState<Human>(initData);
  const [sex, sexChange] = useState<string>(initData.human.sex);
  const handleSubtractCoin = () => {
    setData((prevValue): Human => {
      let newData: Human = { ...prevValue };
      newData.accountBalance = newData.accountBalance - 500;
      return newData;
    });
  };
  const handleAddCoin = () => {
    setData((prevValue): Human => {
      let newData: Human = { ...prevValue };
      newData.accountBalance = newData.accountBalance + 500;
      return newData;
    });
  };
  const handleSexChange = () => {
    sexChange((prevState): string => {
      let newData = prevState;
      if (newData === "man") {
        newData = "woman";
      } else if (newData === "woman") {
        newData = "man";
      }

      return newData;
    });
  };

  return (
    <div className="App">
      <button onClick={handleSubtractCoin}>Subtract</button>
      <button onClick={handleAddCoin}>Add</button>
      <button onClick={handleSexChange}>Swap Sex</button>
      <div>{sex}</div>
      <div>{data.human.surname}</div>
      <div>{data.accountBalance}</div>
    </div>
  );
}

export default App;
