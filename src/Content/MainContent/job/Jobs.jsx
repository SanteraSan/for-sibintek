import React, {useEffect, useState} from 'react';
import s from './jobs.module.css'
import NewJobMaker from "../newJobMaker/NewJobMaker";
import RenderJobsElement from "./RenderJobsElements";


const Jobs = (props) => {

    const [newJobMaker, setNewJobMaker] = useState(false)
    let newJobElement = props.jobs.concat(props.job)

    let newJobElements = newJobElement.map((j, i) =>
        <RenderJobsElement
            key={i}
            organisation={j.organisation}
            position={j.position}
            functions={j.functions}/>
    )
    let deleteElement = () =>{
        newJobElement.pop();
        console.log(newJobElement)
    }
    return (
        <div className={s.javascript}>
            {newJobMaker === false ?
                <div>
                    <h2>Перечень мест работы</h2>
                    <ul>
                        <li>{newJobElements}</li>
                    </ul>
                </div>
                :
                <NewJobMaker add={props.add} toggle={setNewJobMaker}/>
            }


            {newJobMaker === false &&
            <div className={s.buttonBlock}>
                <button className={'redactor'} onClick={deleteElement}>Удалить</button>
                <button className={'newJob'} onClick={() => newJobMaker === false ?
                    setNewJobMaker(true) :
                    setNewJobMaker(false)}>Добавить место работы</button>
            </div>
            }

        </div>
    );
};

export default Jobs;