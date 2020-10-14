import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/shared/desktop/logo.svg'
import Button from '../Pages/HomePage/Button/Button.component'
// import { FooterShare } from './FooterLinks'

import './Footer.styles.scss'
import { FooterShare, FooterText } from './FooterLinks'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__links">
                    <div className="footer__logo">
                        <Link to="#">
                            <img src={Logo} alt="logo" />
                        </Link>

                        <div className="footer__share">
                            {FooterShare.map((item, index) => (
                                <Link to="#" key={index}>
                                    <img src={item.src} alt="logo" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="footer__text">
                        <ul>
                            {FooterText.map((item, index) => (
                                <Link to={item.link} key={index}>
                                    {item.text}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer__copyright">
                    <Button>Get an invite</Button>
                    <p>Copyright 2019. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
