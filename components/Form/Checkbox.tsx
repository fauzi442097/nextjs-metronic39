import React from 'react'

type checkboxProps = {
    label?: string,
    className?: string,
    [key:string]: any,
    size?: 'sm' | 'md' | 'lg'
}

const Checkbox = ({ label, size='md', className, ...props } : checkboxProps) => {
  return (
    <div className={`form-check form-check-custom form-check-${size} ${className || ''}`}>
        <input className="form-check-input" type="checkbox" {...props}/>
        { label && <label className="form-check-label text-dark" htmlFor={props.id}> {label} </label>}
    </div>
  )
}

export default Checkbox

