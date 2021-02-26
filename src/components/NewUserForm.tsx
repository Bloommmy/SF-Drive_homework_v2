import * as React from "react";
import "../styles/NewUserForm.css"
import Fields from "./Fields";
import Axios from "Axios";
import {useEffect, useState} from "react";

function NewUserForm() {
    const [fullName, setFullName] = useState("");
    const [dateBirth, setDateBirth] = useState("1970-01-01");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [passportSeriesNumber, setPassportSeriesNumber] = useState("");
    const [passportDateIssue, setPassportDateIssue] = useState("1970-01-01");
    const [passportIssuedBy, setPassportIssuedBy] = useState("");
    const [passportDepartmentCode, setPassportDepartmentCode] = useState("");

    const [driverLicenseSeriesNumber, setDriverLicenseSeriesNumber] = useState("");
    const [driverLicenseDateIssue, setDriverLicenseDateIssue] = useState("");

    function onFullNameChange(e) {
        setFullName(e.target.value);
    }
    function onDateBirthChange(e) {
        setDateBirth(e.target.value);
    }
    function onEmailChange(e) {
        setEmail(e.target.value);
    }
    function onPhoneChange(e) {
        setPhone(e.target.value);
    }

    function onPassportSeriesNumber(e) {
        setPassportSeriesNumber(e.target.value);
    }
    function onPassportDateIssueChange(e) {
        setPassportDateIssue(e.target.value);
    }
    function onPassportIssuedBy(e) {
        setPassportIssuedBy(e.target.value);
    }
    function onPassportDepartmentCode(e) {
        setPassportDepartmentCode(e.target.value);
    }

    function onDriverLicenseSeriesNumber(e) {
        setDriverLicenseSeriesNumber(e.target.value);
    }
    function onDriverLicenseDateIssue(e) {
        setDriverLicenseDateIssue(e.target.value);
    }

    const [status, setStatus] = React.useState(false);

    function onStatus() {
        if (fullName != "") {
            setStatus(true);
            console.log(fullName, status);
        }
    }

    let formBlocks = [
        {
            title: "Информация о вас",
            fields: [
                {
                    label: "ФИО",
                    input: "text",
                    id: "fullName",
                    hint: "ФИО полностью",
                    value: fullName,
                    onChange: onFullNameChange
                },
                {
                    label: "Дата рождения",
                    input: "date",
                    id: "dateBirth",
                    value: dateBirth,
                    onChange: onDateBirthChange
                },
                {
                    label: "Электронная почта",
                    input: "email",
                    id: "email",
                    hint: "mail@example.com",
                    value: email,
                    onChange: onEmailChange
                },
                {
                    label: "Телефон",
                    input: "text",
                    id: "phone",
                    hint: "+7 900 000-00-00",
                    value: phone,
                    onChange: onPhoneChange
                }
            ]
        },
        {
            title: "Паспорт",
            fields: [
                {
                    label: "Серия и номер",
                    input: "text",
                    id: "passportSeriesNumber",
                    hint: "0000 000000",
                    value: passportSeriesNumber,
                    onChange: onPassportSeriesNumber
                },
                {
                    label: "Дата выдачи",
                    input: "date",
                    id: "passportDateIssue",
                    value: passportDateIssue,
                    onChange: onPassportDateIssueChange
                },
                {
                    label: "Кем выдан",
                    input: "text",
                    id: "passportIssuedBy",
                    hint: "Название органа выдавшего паспорт",
                    value: passportIssuedBy,
                    onChange: onPassportIssuedBy
                },
                {
                    label: "Код подразделения",
                    input: "text",
                    id: "passportDepartmentCode",
                    hint: "000-000",
                    value: passportDepartmentCode,
                    onChange: onPassportDepartmentCode
                }
            ]
        },
        {
            title: "Водительское удостоверение",
            fields: [
                {
                    label: "Серия и номер",
                    input: "text",
                    id: "driverLicenseSeriesNumber",
                    hint: "0000 000000",
                    value: driverLicenseSeriesNumber,
                    onChange: onDriverLicenseSeriesNumber
                },
                {
                    label: "Дата выдачи",
                    input: "date",
                    id: "driverLicenseDateIssue",
                    hint: "00.00.0000",
                    value: driverLicenseDateIssue,
                    onChange: onDriverLicenseDateIssue
                }
            ]
        }
    ]

    function onSubmit(e) {
        onStatus();
        e.preventDefault();
        Axios.post('/users', { fullName })
            .then(res => res.data)
            .then(data => console.log(data))
        console.log({
            status: status,
            fullName: fullName,
            dateBirth: dateBirth,
            email: email,
            phone: phone,
            passportSeriesNumber: passportSeriesNumber,
            passportDateIssue: passportDateIssue,
            passportIssuedBy: passportIssuedBy,
            passportDepartmentCode: passportDepartmentCode,
            driverLicenseSeriesNumber: driverLicenseSeriesNumber,
            driverLicenseDateIssue: driverLicenseDateIssue
        });
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(json => console.log(json));
    }, [])

    return (
        <>
            <div className='whole-form'>
                {users.map(u => <div>{ u.name }</div>)}
                <form className='form-input-all'>
                {formBlocks.map((block) =>
                    <div className='part-form'>
                        <div className='part-form-title'>
                            <div className='part-form-title-text'>{ block.title }</div>
                        </div>
                        <Fields fields={ block.fields }/>
                    </div>
                )}
                </form>
                <div className='from-basement'>
                    <button className='from-basement-button' type="submit" onClick={onSubmit}>
                        <div className='from-basement-button-text'>
                            Продолжить
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default NewUserForm;