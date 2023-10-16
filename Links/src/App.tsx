import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./menu/Menu";
interface Links {
  link: string;
  name: string;
}
const menu: Links[] = [
  {
    link: "/faktury",
    name: "faktury",
  },
  {
    link: "/dokumenty",
    name: "dokumenty",
  },
  {
    link: "/odczyty",
    name: "odczyty",
  },
  {
    link: "/kontakt",
    name: "kontakt",
  },
];

function App() {
  return (
    <div className="App">
      {menu.map((link: Links) => (
        <Menu link={link.link} name={link.name}>
          {link.name}
        </Menu>
      ))}
    </div>
  );
}

export default App;
