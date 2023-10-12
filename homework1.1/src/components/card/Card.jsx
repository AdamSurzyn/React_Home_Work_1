import React from "react";
import TopCard from "../topCard/TopCard";
import BotCard from "../botCard/BotCard";

const Card = ({ name, medals, img }) => {
  return (
    <div className="card">
      <TopCard name={name}></TopCard>
      <BotCard medals={medals}></BotCard>
    </div>
  );
};

export default Card;
