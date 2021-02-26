import * as React from "react";
import "../styles/Header.css"
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";


function Header(props) {
    const [clicks, setClicks] = useState(0)

    function handelClick() {
        console.log(clicks + 1)
    }

    return (
        <header>
            <ul>
                <li>
                    <h1>SkillDrive</h1>
                </li>
                <li>
                    <div className='menu'>
                        <div onClick={handelClick} className='menu about_us_box'>
                            <div className='about_us_text'>О нас</div>
                        </div>
                        <div className='menu terms_box'>
                            <div className='terms_text'>Условия</div>
                        </div>
                        <div className='menu faq_box'>
                            <div className='faq_text'>
                                <Link to="/faq">
                                    Частые вопросы
                                </Link>
                            </div>
                        </div>
                        <button className="some-button">
                            <div className="text-button">Войти</div>
                        </button>
                    </div>
                </li>
            </ul>
        </header>
    )
};

export default Header;