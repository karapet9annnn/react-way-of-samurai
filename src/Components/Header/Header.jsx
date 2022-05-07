import css from './Header.module.css'
import {NavLink} from 'react-router-dom'
import React from 'react';



function Header(props) {
  return (<>
    <div className={css.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" alt="logo" />
      <div className="login">
         {props.isAuth 
         ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>  
       : <NavLink to={'/login'} className={css.a}>Login</NavLink> }</div>  
    </div>
    </>
  );
}



export default Header;


