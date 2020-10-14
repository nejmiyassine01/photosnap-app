import React from 'react'
import { Link } from 'react-router-dom';
import './Button.styles.scss'

const STYLES = [
    "btn--white--solid",
    "btn--dark--solid"
]

const SIZES = ["btn--medium", "btn--small"]

export const Button = ( { children, buttonStyle, buttonSize } ) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize
        : SIZES[0];
    
    return (
        <Link to='#' href="#get" className={`btnCta__link ${checkButtonStyle} ${checkButtonSize}`}>
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
        </Link>
    )
}

export default Button