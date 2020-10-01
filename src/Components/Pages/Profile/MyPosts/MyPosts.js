import React from "react";
import s from './style.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea />
        <button>Add Post</button>
      </div>
      <div>
        <Post message='Hi, how are you?' likeCount={20}/>
        <Post message='Hello' likeCount={2}/>
      </div>
    </div>
  )
};

export default MyPosts