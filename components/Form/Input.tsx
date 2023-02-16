import React from 'react'

type inputProps = {
    className?: string,
    [key:string]: any;
}

const InputText = ({ className, ...props } : inputProps) => {
    return (
        <input
            type="text"
            className={`form-control ${className || ''}`}
             {...props}
        />
    )
}

const Input = {
    Text: InputText
}

export default Input