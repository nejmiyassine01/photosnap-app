import React from 'react'
import { Link } from 'react-router-dom'
import './Button.style.scss'

const Button = ({
    children,
    type,
    className,
    onClick
}) => {
    return (
        <Link to="#" className={className} onClick={onClick} type={type}>{children}</Link>
    )
}

export default Button