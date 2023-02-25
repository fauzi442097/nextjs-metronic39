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

const InputPassword = ({ className, ...props } : inputProps) => {

    return (
        <input
            type="password"
            className={`form-control ${className || ''}`}
             {...props}
        />
    )
}



const Input = {
    Text: InputText,
    Password: InputPassword
}

export default Input