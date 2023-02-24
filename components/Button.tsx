import React, {ReactNode} from 'react'

type buttonProps = {
    children: ReactNode,
    className?: string
    type?: 'white' | 'primary' | 'light' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark',
    size?: 'sm' | 'md' | 'lg' | 'xl',
    [key:string]: any;
}

const Button = ({ children, className, type='primary', size = 'md', ...props } : buttonProps) => {
  return (
    <button 
        className={`btn btn-${size} btn-${type} ${className || ''}`} {...props}>
        {children}
    </button>
  )
}

const ButtonLight = ({ children, className, type='primary', size = 'md', ...props } : buttonProps) => {
    return (
        <button 
            className={`btn btn-${size} btn-light-${type} ${className || ''}`} {...props}>
            {children}
        </button>
    )
}

const ButtonIcon = ({ children, className, type='primary', size = 'md', ...props } : buttonProps) => {
  return (
    <button 
        className={`btn btn-${size} btn-icon btn-${type} ${className || ''}`} {...props}>
        {children}
    </button>
  )
}

const ButtonOutline = ({ children, className, type='primary', size = 'md', ...props } : buttonProps) => {
  return (
    <button 
        className={`btn btn-outline btn-${size} btn-outline-${type} ${className || ''}`} {...props}>
        {children}
    </button>
  )
}

const ButtonCustom = ({ children, className, type='primary', size = 'md', ...props } : buttonProps) => {
  return (
    <button 
        className={`btn btn-${size} ${className || ''}`} {...props}>
        {children}
    </button>
  )
}


Button.Light = ButtonLight
Button.Icon = ButtonIcon
Button.Outline = ButtonOutline
Button.Custom = ButtonCustom

export default Button