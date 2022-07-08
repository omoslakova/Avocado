import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.48hourslogo.com/oss/works/2022/04/26/23937402390/117942_18522_1d690e57-63e1-4eda-b33a-135b4b3dc62f.jpg'>

        </img>
        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header