import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

type inputType = 'text' | 'number' | 'password' | 'date'

type InputProps = {
    label?: string;
    name: any;
    register: UseFormRegister<any>;
    validation?: any;
    type?: inputType;
    errors: any;
    formGroupClass?: string;
    className?: string;
    labelClass?: string;
    [x:string]: any;
}

const Input = ({ 
    type = 'text',
    label, 
    formGroupClass,
    className,
    register, 
    name, 
    validation,
    errors,
    labelClass,
    ...props
} : InputProps) => {


    return (
        <div className={`form-group ${formGroupClass || ''}`}>
            { label && <label htmlFor={name} className={`form-label ${labelClass || ''}`}> {label} </label>}
            <input 
                type={type}
                className={`form-control ${className || ''} ${errors && 'text-danger border-danger'}`} 
                {...register(name, validation)}
                {...props}
            />
            {errors && <span className='mt-2 d-inline-block fs-7 text-danger'>{errors.message}</span>}
        </div>
    )
}

export default Input