import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/Card";
function App() {
  const Card1 = {
    name: "Adam Surzyn",
    medals: {
      bronze: 1,
      silver: 2,
      gold: 3,
    },
  };
  return (
    <div className="App">
      <div className="card-container">
        <Card name={Card1.name} medals={Card1.medals}></Card>
      </div>
    </div>
  );
}

export default App;
