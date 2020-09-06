import React from 'react';
import s from './javasript.module.css'

function Javascript(props) {
    return (
        <div className={s.javascript}>
            <h2>Перечень мест работы</h2>
            <ul>
                <li><b>ООО ТехСтройСнаб:</b><br/>
                <b>Длжность:</b> Инженер систем безопасности.<br/>
                <b>Должностные обязаности:</b> <br/>Руководитель отдела. Обеспечение системами безопасности строительных объектов. IP-видеонаблюдение, Автоматизация учета ГСМ, интернет и телефония.
                </li>
                <li><b>ООО Лидер Поиска</b><br/>
                    <b>Должность:</b> Программист <br/>
                    <b>Должностые обязанности:</b><br/> Разработка и создание сайтов.
                    Подключение CMS. Поддержка действующих проектов.
                </li>
            </ul>
            <div className={s.buttonBlock}>
                <button className={'redactor'}>Редактировать</button>
                <button className={'newJob'}>Добавить место работы</button>
            </div>

        </div>
    );
}

export default Javascript;