import React from 'react';
import s from './header.module.css';
function Header(props) {
    return (
        <div className={s.header}>
            <div className={s.header__logo}>LOGO</div>
            <h1 className={s.header__h1}>Приветствую Вас!!!</h1>
            <div className={s.header__contacts}>+7-996-292-54-59</div>
        </div>
    );
}

export default Header;
