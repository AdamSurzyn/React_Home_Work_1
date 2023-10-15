import React from "react";
import style from "./BotCard.css";
import Rewards from "./rewards/Rewards";
import Medal from "./medals/Medals";

const BotCard = ({ medals }) => {
  return (
    <div className="bot">
      <Rewards></Rewards>
      <div className="medals-container">
        {medals.map((medal, index) => {
          return (
            <Medal
              color={medal.color}
              amount={medal.amount}
              key={index}
            ></Medal>
          );
        })}
      </div>
    </div>
  );
};

export default BotCard;
