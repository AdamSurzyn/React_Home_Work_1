import React from "react";

const ShopItem = ({ name, price }: { name: string; price: number }) => {
  return (
    <div className="shop-item">
      <div>Name: {name}</div>
      <div>Price: {price}</div>
    </div>
  );
};

export default ShopItem;
