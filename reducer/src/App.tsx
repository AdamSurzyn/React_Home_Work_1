import React, { Reducer, useReducer } from "react";
import "./App.css";
import ShopItem from "./components/ShopItems/ShopItems";
import { act } from "react-dom/test-utils";

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
  cartArr = [...state];
  switch (action.type) {
    case "add":
      let itemFound: boolean = false;
      cartArr.map((item) => {
        if (
          item.name === action.payload.name &&
          item.count !== null &&
          item.price !== null &&
          !itemFound
        ) {
          itemFound = true;
          return [
            ...cartArr,
            {
              ...item,
              count: item.count++,
              price: item.count * item.price,
            },
          ];
        }
      });
      if (!itemFound) {
        console.log("im here");
        cartArr.push(action.payload);
      }
      //Te wszystkie kopie cartAll sa stworzone po to, zeby sie upewnic, ze nie mutowalem state.
      //item.count jest zwiekszany dwa razy, wiec myslalem, ze gdzies mutuje state, ale nie wiem gdzie....
      return [...cartArr];
    case "remove":
      cartArr.map((item, index) => {
        if (item.name === action.payload.name) {
          cartArr.splice(index, 1);
          return [...cartArr];
        }
      });
      return [...cartArr];
    case "removeAll":
      cartArr = [];
      return [...cartArr];
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
              <button
                onClick={() => {
                  dispatch({
                    type: ActionTypes.REMOVE,
                    payload: {
                      name: item.name,
                      id: item.id,
                      count: item.count,
                      price: item.price,
                    },
                  });
                }}
              >
                REMOVE
              </button>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.count}</div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          dispatch({
            type: ActionTypes.REMOVEALL,
            payload: {
              name: "",
              id: null,
              count: null,
              price: null,
            },
          });
        }}
      >
        Remove All
      </button>
    </div>
  );
}

export default App;
