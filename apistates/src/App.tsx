import React, { useState } from "react";
import "./App.css";
import Post from "./post/post";
import { useEffect } from "react";
type PostType = {
  userId: number | null;
  id: number | null;
  title: string | null;
  body: string | null;
};
const initPost = {
  userId: null,
  id: null,
  title: "",
  body: "",
};

//Co zrobic z typem jesli odpowiedz API sie zmieni?

function App() {
  const [post, updatePost] = useState<PostType>(initPost);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts/2");
      const json = await data.json();
      updatePost(json);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <Post
        id={post?.id}
        userId={post?.userId}
        title={post.title}
        body={post.body}
      ></Post>
    </div>
  );
}

export default App;
