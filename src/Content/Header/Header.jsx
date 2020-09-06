import React from 'react';
import s from './header.module.css';
import svg from '../../uploads/hipster.svg'

function Header(props) {
    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                <img className={s.logo__img} src={svg} alt="123"/>
            </div>
            <h1 className={s.header__h1}>Приветствую Вас!!!</h1>
            <div className={s.header__contacts}>+7-996-292-54-59 <br/>santera102@gmail.com</div>
        </div>
    );
}

export default Header;
