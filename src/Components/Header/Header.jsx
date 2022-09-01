import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://st4.depositphotos.com/4242997/25151/i/950/depositphotos_251519206-stock-photo-avocado-watercolor-hand-draw-illustration.jpg?forcejpeg=true'>
        </img>
        <div className={s.loginBlock}>
            { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header