import React from "react";
import s from './style.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          alt='background page'
          src='https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-literary-flowers-retro-background-image_17072.jpg'/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
};
export default Profile