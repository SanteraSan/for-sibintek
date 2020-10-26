import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from "../maincontainer.module.css"


const JobMakerForm = (props) => {
    // debugger
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="">Организация</label>
                <div>
                    <Field
                        name="organisation"
                        component="input"
                        type="text"
                        placeholder="Организация"
                    />
                </div>
            </div>
            <div>
                <label className={s.label} htmlFor="">Должность</label>
                <div>
                    <Field
                        name="position"
                        component="input"
                        type="text"
                        placeholder="Должность"
                    />
                </div>
            </div>
            <div>
                <label className={s.label} htmlFor="">Должностные обязаности</label>
                <div>
                    <Field name="functions" component="textarea"/>
                </div>
            </div>
            <div className={s.buttonBlockForm}>
                <button>Сохранить</button>
                <button onClick={() => props.toggle(false)}>Закрыть</button>
            </div>
            {/*<button onClick={() => props.toggle(false)}>Сохранить</button>*/}
        </form>
    )

}
const JobMakerFormRedux = reduxForm({
    form: 'newJobMakerForm'
})(JobMakerForm)

const NewJobMaker = (props) => {
    const onSubmit = (formData) => {
        props.add(formData);
        props.toggle(false)
        console.log(formData.organisation)
    }
    return (
        <div>
            <h2>Добавление нового места работы</h2>
            <JobMakerFormRedux onSubmit={onSubmit} toggle={props.toggle}/>
        </div>

    );
}

export default NewJobMaker;
//
// <ul>
//     <li>
//         <b>Организация:</b><input type="text" id='organisation'/></li>
//     <li><b>Должность:</b> <input type="text" id='position'/></li>
//     <li><b>Должностные обязаности:</b> <br/><textarea name="" id="functions" cols="30" rows="10"></textarea>
//     </li>
// </ul>
// <button onClick={() => props.toggle(false)}>Отменить</button>
// <button onClick={() => props.toggle(false)}>Сохранить</button>