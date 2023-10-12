import React from "react";

const BotCard = ({ medals }) => {
  return (
    <div className="bot">
      Rewards
      <div>
        Bronze
        {medals.bronze}
      </div>
      <div>
        Silver
        {medals.silver}
      </div>
      <div>
        Gold
        {medals.gold}
      </div>
    </div>
  );
};

export default BotCard;
