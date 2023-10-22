import React from "react";
//Nie dziala mi importowanie stylu z pliku css :/
type PostType = {
  userId: number | null;
  id: number | null;
  title: string | null;
  body: string | null;
};
const Post = ({ userId, id, title, body }: PostType) => {
  return (
    <div className="post-container">
      <div>{id}</div>
      <div>{title}</div>
      <div>{body}</div>
      <div>{userId}</div>
    </div>
  );
};

export default Post;
