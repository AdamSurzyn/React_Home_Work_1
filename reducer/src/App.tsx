import React, { Reducer, useReducer } from "react";
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
  id: number | null;
  count: number | null;
  price: number | null;
};

enum ActionTypes {
  ADD = "add",
  REMOVE = "remove",
  REMOVEALL = "removeAll",
}

type Actions = {
  type: ActionTypes;
  payload: Item;
};

function reducer(state: typeof shopItems, action: Actions) {
  let cartArr: Item[];
  switch (action.type) {
    case "add":
      cartArr = [...state];
      cartArr.map((item) => {
        if (item.name === action.payload.name && item.count !== null) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          cartArr.push(action.payload);
        }
      });
      // cartArr.push(action.payload);

      return cartArr;

    default:
      throw new Error();
  }
}
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

function App() {
  const [state, dispatch] = useReducer<Reducer<Item[], Actions>>(reducer, [
    { name: "", id: null, count: null, price: null },
  ]);
  return (
    <div className="App">
      <div className="shop-items">
        {shopItems.map(({ name, price, id }) => {
          return (
            <div className="item-container" key={id}>
              <button
                onClick={() =>
                  dispatch({
                    type: ActionTypes.ADD,
                    payload: {
                      name: name,
                      id: id,
                      count: 1,
                      price: price,
                    },
                  })
                }
              >
                ADD
              </button>
              <ShopItem name={name} price={price}></ShopItem>
            </div>
          );
        })}
      </div>
      <div>
        {state.map((item) => {
          return (
            <div className="cart-item-container">
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
