import React, {ReactNode} from 'react'

type selectProps = {
    className?: string,
    children: ReactNode,
    [key:string]: any;
}

const Select = ({ className, children, ...props } : selectProps) => {
  return (
    <select className={`form-select ${className || ''}`} {...props}>
        {children}
    </select>
  )
}

export default Select