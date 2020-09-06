import React from 'react';
import s from './jobs.module.css'
import RenderJobsElement from "./RenderJobsElements";



const  Jobs = (props) => {
    debugger

    let jobElements = props.job.map((j,i) => <RenderJobsElement
        key={i}
        organisation={j.organisation}
        position={j.position}
        functions={j.functions}/> );
    debugger
    return (
        <div className={s.javascript}>
            <h2>Перечень мест работы</h2>
            <ul>
                {jobElements}
            </ul>
            <div className={s.buttonBlock}>
                <button className={'redactor'}>Редактировать</button>
                <button className={'newJob'}>Добавить место работы</button>
            </div>
        </div>
    );
};

export default Jobs;