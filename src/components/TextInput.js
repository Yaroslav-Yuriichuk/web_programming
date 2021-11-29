import React from 'react'
import FormError from './FormError'

const TextInput = ({ id, htmlFor, label, name, value, onChange, onBlur, touched ,error }) => {
    return (
        <div className="input-text">
            <label htmlFor={htmlFor}>{label}</label>
            <textarea id={id} name={name} value={value} onChange={onChange} onBlur={onBlur}></textarea>
            {error ? <FormError message={error} /> : <></>}
        </div>
    )
}

export default TextInput
