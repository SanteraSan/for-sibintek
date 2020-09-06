import React from 'react';
import s from "./info.module.css";

function Information(props) {
    return (
        <div className={s.information}>
            <h3>Стек используемых технологий</h3>
            <ul>
                <div>
                    <li><b>HTML:</b><i> Семантическая вёрстка, БЭМ;</i></li>
                    <li><b>CSS:</b><i> Адаптивная, кросбраузерная верстка;</i></li>
                    <li><b>Препроцессор SCSS:</b><i> миксины, функции, переменные, itcss(invert triangle css);</i></li>
                    <li><b>JavaScript:</b><i> promise, async-await, REST API, замыкания, event loop;</i></li>
                    <li><b>WebPack, Gulp:</b><i> Детальная настройка;</i></li>
                    <li><b>React:</b><i> props, ContextAPI, Route, react hooks, react hoc;</i></li>
                    <li><b>Redux:</b><i> redux-thunk, redux-saga;</i></li>
                </div>
            </ul>
        </div>
    );
}

export default Information;