import React, { useReducer } from "react";
import "./App.css";
import ShopItem from "./components/ShopItems/ShopItems";
//TODO Koszyk ma miec:
//TODO dodawanie przedmiotu
//TODO wyrzucanie przedmiotu
//TODO wyrzucenie wszystkich przedmiotow
//TODO po dodaniu jednego przedmiotu ma sie zwiekszyc ilosc tego przedmiotu w koszyku
//TODO Wyswietl koncowa sume do zaplaty i ilosc przedmiotow w koszyku

type Item = {
  name: string;
  id: number;
  count: number;
  price: number;
};

enum ActionTypes {
  ADD = "add",
  REMOVE = "remove",
  REMOVEALL = "removeAll",
}

type Actions = {
  type: ActionTypes;
  payload?: Item;
};
function reducer(state: Item[], action: Actions): Item[] {
  let cartArr: Item[];
  switch (action.type) {
    case "add":
      if (action.payload !== undefined) {
        cartArr = [...state];
        cartArr.push(action.payload);
        return cartArr;
      }
      return state;

    default:
      return state;
  }
}
function App() {
  const shopItems: Item[] = [
    {
      name: "Slonecznik",
      id: 1,
      count: 1,
      price: 10,
    },
    {
      name: "Maslo",
      id: 2,
      count: 1,
      price: 6,
    },
    {
      name: "Czekolada",
      id: 3,
      count: 1,
      price: 6,
    },
  ];
  const [state, dispatch] = useReducer(reducer, [
    { name: "", id: null, count: null, price: null },
  ]);
  return (
    <div className="App">
      <div className="shop-items">
        {shopItems.map(({ name, price }) => {
          return <ShopItem name={name} price={price}></ShopItem>;
        })}
      </div>
    </div>
  );
}

export default App;
