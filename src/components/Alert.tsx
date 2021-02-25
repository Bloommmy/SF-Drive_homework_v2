import * as React from "react";
import '../styles/Alert.css'
import Country from "./Country";
import {useEffect} from "react";

function Alert({ question, answer }) {
    const [selected, changeSelected] = React.useState(false);
    return (
        selected ?
            <>
            <div onClick={() => changeSelected(false)} className={selected ? "alert alert-on": "alert alert-off"}>
                <div className='alert-text'>{question}</div>
                <div className='alert-svg'>
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.88 10.5601L8 4.44006L14.12 10.5601L16 8.66673L8 0.666725L0 8.66673L1.88 10.5601Z" fill="#61A199"/>
                    </svg>
                </div>
            </div>
            <div className='answer'>
                <div className='answer-text'>{answer}</div>
            </div>
            </>
            :
            <div onClick={() => changeSelected(true)} className={selected ? "alert alert-on": "alert alert-off"}>
                <div className='alert-text'>{question}</div>
                <div className='alert-svg'>
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z" fill="#A0A7AD"/>
                    </svg>
                </div>
            </div>
    )
}

Alert.defaultProps = {
    answer: "Ответ в процессе разработки."
}
export default  Alert;