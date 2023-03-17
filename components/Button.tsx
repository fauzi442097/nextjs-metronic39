import React, {ReactNode} from 'react'

export type buttonProps = {
    children: ReactNode,
    className?: string
    variant?: 'white' | 'primary' | 'light' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark',
    size?: 'sm' | 'md' | 'lg' | 'xl',
    [key:string]: any;
}

const Button = ({ children, className, variant='primary', size = 'md', ...props } : buttonProps) => {
  return (
    <button 
        {...props}
        className={`btn btn-${size} btn-${variant} ${className || ''}`}>
        {children}
    </button>
  )
}

const ButtonLight = ({ children, className, variant='primary', size = 'md', ...props } : buttonProps) => {
    return (
        <button 
            {...props}
            className={`btn btn-${size} btn-light-${variant} ${className || ''}`}>
            {children}
        </button>
    )
}

const ButtonIcon = ({ children, className, variant='primary', size = 'md', ...props } : buttonProps) => {
  return (
    <button 
        {...props}
        className={`btn btn-${size} btn-icon btn-${variant} ${className || ''}`}>
        {children}
    </button>
  )
}

const ButtonOutline = ({ children, className, variant='primary', size = 'md', ...props } : buttonProps) => {
  return (
    <button 
        {...props}
        className={`btn btn-outline btn-${size} btn-outline-${variant} ${className || ''}`}>
        {children}
    </button>
  )
}

const ButtonCustom = ({ children, className, variant='primary', size = 'md', ...props } : buttonProps) => {
  return (
    <button 
        {...props}
        className={`btn btn-${size} ${className || ''}`}>
        {children}
    </button>
  )
}


Button.Light = ButtonLight
Button.Icon = ButtonIcon
Button.Outline = ButtonOutline
Button.Custom = ButtonCustom

export default Button