import React from 'react'

type radioProps = {
    label?: string,
    className?: string,
    [key:string]: any,
    size?: 'sm' | 'md' | 'lg'
}

const Radio = ({ label, size='md', className, ...props} : radioProps) => {
  return (
    <div className={`form-check form-check-custom form-check-${size} ${className || ''}`}>
        <input className="form-check-input" type="radio" {...props}/>
        { label && <label className="form-check-label text-dark" htmlFor={props.id}> {label} </label>}
    </div>
  )
}

export default Radio