import React from 'react'
// import './Button.style.scss';
import './Button.style.scss'

export const Button = ({
    children,
    type,
    onclick
}) => {
    return (
        <a href="#GetAnInvite" className="btn-cta" onClick={onclick} type={type}>{children}</a>
    )
}