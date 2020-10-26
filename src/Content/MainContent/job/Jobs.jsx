import React, {useState} from 'react';
import s from './jobs.module.css'
import NewJobMaker from "../newJobMaker/NewJobMaker";
import RenderJobsElement from "./RenderJobsElements";


const Jobs = (props) => {

    const [newJobMaker, setNewJobMaker] = useState(false)
    const [counter, setCounter] = useState(0)


    let newJobElements = props.job.map((j, i) =>
        <RenderJobsElement
            key={i}
            organisation={j.organisation}
            position={j.position}
            functions={j.functions}/>
    )
    let deleteJob = () => {
        props.job.pop();
        props.deleteJobs(props.job)
    }

    return (
        <div className={s.javascript}>
            {newJobMaker === false ?
                <div className={s.jobsBlock}>
                    <h2>Перечень мест работы</h2>
                    <ul>
                        <li>{newJobElements}</li>
                    </ul>
                </div>
                :
                <div className={s.newJobMakerBlok}>
                    <NewJobMaker add={props.add} toggle={setNewJobMaker}/>
                </div>}
            {
                newJobMaker === false && <div className={s.buttonBlock}>
                <button className={'redactor'} onClick={() => {
                deleteJob();
                setCounter(counter === 0 ? 1 : 0)
            }}>Удалить
                </button>
                <button className={'newJob'} onClick={() => newJobMaker === false ?
                setNewJobMaker(true) :
                setNewJobMaker(false)}>Добавить место работы
                </button>
                </div>
            }
        </div>
    );
};

export default Jobs;