import "./App.css";
import Card from "./components/card/Card";
function App() {
  const data = [
    {
      name: "Alfred",
      surname: "Bogucki",
      avatar:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      background:
        "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
      medals: [
        {
          color: "Bronze",
          amount: 4,
        },
        {
          color: "Silver",
          amount: 1,
        },
        {
          color: "Gold",
          amount: 2,
        },
      ],
    },
    {
      name: "Andrzej",
      surname: "Mikucki",
      avatar:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      background:
        "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
      medals: [
        {
          color: "Bronze",
          amount: 3,
        },
        {
          color: "Silver",
          amount: 3,
        },
        {
          color: "Gold",
          amount: 6,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <div className="cards-container">
        {data.map((person, index) => {
          person.fullName = `${person.name} ${person.surname}`;
          return (
            <Card
              key={index}
              name={person.fullName}
              medals={person.medals}
              imgUrlAvatar={person.avatar}
              imgUrlBackground={person.background}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
