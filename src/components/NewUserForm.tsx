import * as React from "react";
import "../styles/NewUserForm.css"
import Fields from "./Fields";
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

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(json => setUsers(json));
    }, [])

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
        e.preventDefault();
        console.log("fullName:",fullName);
        console.log("dateBirth:",dateBirth);
        console.log("email:",email);
        console.log("phone:",phone);
        console.log("passportSeriesNumber:",passportSeriesNumber);
        console.log("passportDateIssue:",passportDateIssue);
        console.log("passportIssuedBy:",passportIssuedBy);
        console.log("passportDepartmentCode:",passportDepartmentCode);
        console.log("driverLicenseSeriesNumber:",driverLicenseSeriesNumber);
        console.log("driverLicenseDateIssue:",driverLicenseDateIssue);
    }

    return (
        <>
            <div className='whole-form'>
                {users.map(u => <div>{ u.name }</div>)}
                <form className='form-input'>
                {formBlocks.map((block) =>
                    <div className='part-form'>
                        <div className='part-form-title'>
                            <div className='part-form-title-text'>{ block.title }</div>
                        </div>
                        <Fields fields={ block.fields }/>
                    </div>
                )}
                <button type="submit" onClick={onSubmit}>Продолжить</button>
                </form>
            </div>
        </>
    );
};

export default NewUserForm;