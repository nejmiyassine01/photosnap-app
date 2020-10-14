import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../assets/shared/desktop/logo.svg';
import menu from '../../assets/shared/mobile/menu.svg';
import close from '../../assets/shared/mobile/close.svg';

import { MenuItems } from './MenuItems';
import Button from '../Button.component';

import './Navbar.style.scss';

class Navbar extends Component {    
    state = {clicked: false};
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
        return (
            <nav className="NavbarItems">
                <Link to="/" className="NavbarLogo">
                    <img src={logo} alt="PHOTOSNAP" />
                </Link>

                <div className="Navbar-icon" onClick={this.handleClick}>
                    <img src={this.state.clicked ? close : menu} alt="Menu" />
                </div>
                
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    { MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}

                    <Button className="btn-cta" type="submit">Get an invite</Button>
                </ul>
                
            </nav>
        )
    }
}

export default Navbar
