import React from "react";
import Name from "./name/Name";
import Avatar from "./avatar/Avatar";
import style from "./TopCard.css";
const TopCard = ({ name, imgUrlAvatar, imgUrlBackground }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgUrlBackground})` }}
      className="top"
    >
      <Name contenderName={name} />
      <Avatar imgUrlAvatar={imgUrlAvatar} />
    </div>
  );
};

export default TopCard;
