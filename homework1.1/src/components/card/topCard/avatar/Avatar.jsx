import React from "react";
import style from "./Avatar.css";
const Avatar = ({ imgUrlAvatar }) => {
  return (
    <div
      className="avatar"
      style={{ backgroundImage: `url(${imgUrlAvatar})` }}
    ></div>
  );
};

export default Avatar;
