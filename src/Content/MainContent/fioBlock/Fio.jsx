import React, {useState} from 'react';
import s from './fio.module.css';

function Fio(props) {
    const [name, setName] = useState(props.name == undefined ? 'Александр' : props.name);
    const [surname, setSurname] = useState(props.surname == undefined ? 'Зайцев' : props.surname);
    const [otchestvo, setOtchestvo] = useState(props.otchestvo == undefined ? 'Владимирович' : props.otchestvo);
    const [citizen, setCitizen] = useState(props.citizen == undefined ? 'Российская Федерация' : props.citizen);
    const [dateBorn, setDateBorn] = useState(props.dateBorn == undefined ? '20 декабря 1986' : props.dateBorn);
    return (
        <div className={s.fio}>
            <div className={s.leftside__fio}>
                <h3>Персональные данные</h3>
                <ul className={s.first_ul}>
                    <li><b>Имя</b>: <span>{name}</span></li>
                    <li><b>Фамилия</b>: <span>{surname}</span></li>
                    <li><b>Отчество</b>: <span>{otchestvo}</span></li>
                    <li><b>Гажданство</b>: <span>{citizen}</span></li>
                    <li><b>Дата рождения</b>: <span>{dateBorn}</span></li>
                </ul>
            </div>
            <div className={s.rightside__fio}>
                <h3>Образование</h3>
                <ul>
                    <li><b>Среднее:</b> сош №9 г.Бирск</li>
                    <li><b>Незаконченное высшее:</b><br/> УГАТУ ФАП (3 курса)</li>
                </ul>
            </div>
        </div>
    );
}

export default Fio;