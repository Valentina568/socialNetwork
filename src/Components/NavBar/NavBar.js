import React from 'react'
import s from './style.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/profile'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/dialogs'>Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  )
};

export default NavBar