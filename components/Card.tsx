import React, {ReactNode} from 'react'

type childrenProp = {
  children: ReactNode
}

type cardProp = childrenProp & {
  className?: string
}

const Card = ({ children, className, ...props } : cardProp) => {
  return (
    <div {...props} className={`card border-0 ${className || ''}`}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className, ...props}: cardProp) => {
  return (
    <div {...props} className={`card-header border-0 p-0 ${className || ''}`}>
      {children}
    </div>
  )
}

const CardBody = ({ children, className, ...props} : cardProp) => {
  return (
    <div {...props} className={`card-body p-0 ${className || ''}`}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card