import React from "react";
import Name from "../name/Name";
import Avatar from "../avatar/Avatar";
const TopCard = ({ name }) => {
  return (
    <div>
      {
        <div className="top">
          <Name contenderName={name} />
          <Avatar text={name} />
        </div>
      }
    </div>
  );
};

export default TopCard;
