import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
type ThemeContextProps = {
  theme: boolean;
  toggleTheme: Dispatch<SetStateAction<Theme>>;
};
const ThemeContext = createContext<ThemeContextProps | null>(null);

function App() {
  return <div className="App"></div>;
}

export default App;
