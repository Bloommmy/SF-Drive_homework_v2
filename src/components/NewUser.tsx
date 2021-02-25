import * as React from "react";
import "../styles/NewUser.css";
import NewUserForm from "./NewUserForm";
import {useEffect} from "react";
import Alerts from "./Alerts";

function NewUser() {
    return (
        <>
            <div className='step-number'>
                <div className='step-number-text'>Шаг 1 из 3</div>
            </div>
            <div className='page-title'>
                <div className='page-title-text'>Расскажите о себе</div>
            </div>
            <NewUserForm />
        </>
    );
}

export default NewUser;