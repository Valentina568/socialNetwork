import React from "react";
import s from './style.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink activeClassName={s.active} to='/dialogs/1'>Dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink activeClassName={s.active} to='/dialogs/2'>Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink activeClassName={s.active} to='/dialogs/3'>Oleg</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>It is it-kamasutra</div>
      </div>
    </div>
  )
};

export default Dialogs