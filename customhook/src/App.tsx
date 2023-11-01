import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const useApi = (url: string) => {
  const [isLoading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  //! To by mozna bylo zrobic w try/catch
  //! I errorowac jesli za dlugo trwa fetch
  useEffect(() => {
    console.log("im loading");
    setLoading(true);
    const fetchData = async () => {
      const fetchData: Response = await fetch(url);
      const jsonData = await fetchData.json();

      setJsonData(jsonData);
    };
    setLoading(false);
    fetchData();
  }, []);
  return { isLoading, jsonData };
};

function App() {
  const { isLoading, jsonData } = useApi(
    "https://rickandmortyapi.com/api/character/2"
  );
  return (
    <div className="App">
      <div>{JSON.stringify(jsonData)}</div>
      <div>{isLoading.toString()}</div>
    </div>
  );
}

export default App;
