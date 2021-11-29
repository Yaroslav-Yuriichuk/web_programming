import React from 'react'
import FormError from './FormError'

const InputField = ({ id, htmlFor, label, name, value, onChange, onBlur, touched, error }) => {
    return (
        <div className="input-field">
            <label htmlFor={htmlFor}>{label}</label>
            <input id={id} name={name} value={value} onChange={onChange} onBlur={onBlur}></input>
            {touched && error ? <FormError message={error} /> : <></>}
        </div>
    )
}

export default InputField
