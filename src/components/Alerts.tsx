import * as React from "react";
import '../styles/Alerts.css';

import Alert from "./Alert";
import Country from "./Country";

function Alerts() {
    let alerts = [
        {question: "Могу ли я отменить бронь?"},
        {question: "Могу ли я вернуть деньги, если не подошёл автомобиль?"},
        {question: "Что делать, если случилось ДТП?"},
        {
            question: "Могу ли я оставить автомобиль в удобном для меня месте?",
            answer: "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили."
        },
        {question: "Что делать, если собственник просит заплатить ему напрямую?"},
        {question: "Должен ли я заправлять автомобиль?"}
        ]

    const [selected, changeSelected] = React.useState(false);

    return (
            <div className='alert_all'>
                {alerts.map((alert) =>
                    <Alert question={alert.question}
                           answer={alert.answer} />
                )}
            </div>
    )
}

export default  Alerts;