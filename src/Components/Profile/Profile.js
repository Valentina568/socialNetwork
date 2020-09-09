import React from "react";
import s from './style.module.css'

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
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
        </div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
        <div>
          post 3
        </div>
      </div>
    </div>
  )
};
export default Profile