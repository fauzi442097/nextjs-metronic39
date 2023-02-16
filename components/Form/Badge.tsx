import React, {ReactNode} from 'react'

type badgeProps = {
    type?: 'white' | 'primary' | 'light' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark',
    children: ReactNode,
    className?: string
}


const Badge = ({ type = 'primary', children, className } : badgeProps) => {
  return (
    <span className={`badge badge-${type} ${className || ''}`}>{children}</span>
  )
}

export const BadgeLight = ({ type = 'primary', children, className } : badgeProps) => {
    return (
        <span className={`badge badge-light-${type} ${className || ''}`}>{children}</span>
    )
}


export default Badge