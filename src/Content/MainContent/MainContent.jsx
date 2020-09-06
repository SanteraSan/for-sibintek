import React, {useState} from 'react';
import s from './maincontainer.module.css'
import image from '../../uploads/морда.jpg'
import Fio from "./fioBlock/Fio";
import Information from "./InformBlock/Information";
import Javascript from "./javascript/Javascript";

function MainContent(props) {
    return (
        <div className={s.mainContent}>
            <div className={s.photo}>
                <img src={image} alt="asd"/>
            </div>
            <Fio/>
            <Information/>
            <Javascript/>
        </div>
    );
}

export default MainContent;