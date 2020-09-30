import React from 'react'
// import './Button.style.scss';
import './Button.style.scss'

const Button = ({
    children,
    type,
    className,
    onClick
}) => {
    return (
        <a href="#GetAnInvite" className={className} onClick={onClick} type={type}>{children}</a>
    )
}

export default Button