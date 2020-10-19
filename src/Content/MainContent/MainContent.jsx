import React from 'react';
import s from './maincontainer.module.css'
import image from '../../uploads/морда.jpg'
import Fio from "./fioBlock/Fio";
import Information from "./InformBlock/Information";
import JobsContainer from "./job/JobsContainer";

function MainContent(props) {
    return (
        <div className={s.mainContent}>
            <div className={s.photo}></div>
            <Fio/>
            <Information/>
            <JobsContainer/>
        </div>
    );
}

export default MainContent;