import * as React from "react";
import "../styles/Fields.css"
import Country from "./Country";

function Fields({ fields }) {
    return (
        <>
            <div className='part-form-input'>
                <div className='form-input'>
                    {fields.map(field =>
                        <div className='form-input-str'>
                            <div className='form-input-str-label'>
                                <label htmlFor={ field.id }>{ field.label }</label>
                            </div>
                            <div className='form-input-str-input'>
                                <input id={ field.id } type={ field.input } placeholder={ field.hint } value={ field.value } onChange={ field.onChange }></input>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

Fields.defaultProps = {
    hint: "",
    value: "",
    onChange: ""
}

export default Fields;