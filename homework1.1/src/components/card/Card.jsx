import React from "react";
import TopCard from "./topCard/TopCard";
import BotCard from "./botCard/BotCard";
import style from "./Card.css";
const Card = ({ name, medals, imgUrlAvatar, imgUrlBackground }) => {
  console.log(imgUrlBackground);
  return (
    <div className="card">
      <TopCard
        name={name}
        imgUrlAvatar={imgUrlAvatar}
        imgUrlBackground={imgUrlBackground}
      ></TopCard>
      <BotCard medals={medals}></BotCard>
    </div>
  );
};

export default Card;
