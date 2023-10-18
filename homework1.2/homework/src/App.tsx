import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Info from "./components/info/info";
import { Z_HUFFMAN_ONLY } from "zlib";
function App() {
  interface Human {
    human: {
      sex: "man" | "woman";
      surname: string;
    };
    accountBalance: number;
  }
  const initData: Human = {
    human: {
      sex: "man",
      surname: "Detic",
    },
    accountBalance: 1000,
  };

  const [data, setData] = useState<Human>(initData);

  const [sex, setSex] = useState(initData.human.sex);
  const [surname, setSurname] = useState(initData.human.surname);
  const [balance, setBalanmce] = useState(initData.accountBalance);

  const handleDataChange = () => {
    setData((prev): Human => {
      return prev;
    });
  };

  return (
    <div className="App">
      <Info
        sex={data.human.sex}
        surname={data.human.surname}
        balance={data.accountBalance}
      ></Info>
      <button onClick={handleDataChange}>Eyy</button>
    </div>
  );
}

export default App;
