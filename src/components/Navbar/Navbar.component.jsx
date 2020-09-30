import React, { Component } from 'react';

import './Navbar.style.scss';

import logo from '../../assets/shared/desktop/logo.svg';
import menu from '../../assets/shared/mobile/menu.svg';
import close from '../../assets/shared/mobile/close.svg';


import { MenuItems } from './MenuItems';
import Button from '../Button.component';
// import Button from '../Button.component';

class Navbar extends Component {
    state = {clicked: false};
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
        return (
            <header>
                <nav className="NavbarItems">
                    <div className="NavbarLogo">
                        <img src={logo} alt="PHOTOSNAP" />
                    </div>

                    <div className="Navbar-icon" onClick={this.handleClick}>
                        <img src={this.state.clicked ? close : menu} alt="Menu" />
                    </div>
                    
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        { MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>{item.title}</a>
                                </li>
                            )    
                        })}
                    </ul>
                    <Button className="btn-cta" type="submit">Get an invite</Button>
                </nav>
            </header>
        )
    }
}

export default Navbar
