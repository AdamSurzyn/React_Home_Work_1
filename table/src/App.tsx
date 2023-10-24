import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table/table";

type Data = [
  {
    //[key: string]: string | number | object | boolean;
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
];

//TODO: Tablica przyjmujaca dane 'data'
//TODO: Zasymulowac pobieranie tych danych za pommoca useEffect (uzyj setTimeout(jakasFunkcja))
//TODO: Po kliknieciu w przycisk ma sie rozwinac adress, website i company.

const data: Data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <Table tableData={data[0]} showAll={show}></Table>
      <button onClick={handleClick}>Show all</button>
    </div>
  );
}

export default App;
