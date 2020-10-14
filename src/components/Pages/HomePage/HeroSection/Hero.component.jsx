import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import { Button } from '../Button/Button.component';
import heroImage from '../../../../assets/home/desktop/create-and-share.jpg'

import './Hero.styles.scss';

function Hero() {
    return (
        <section className="heroSection">
            <div className="heroSection__container">
                <div className="heroSection__container--content">
                    <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                    <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>    

                    <Router>
                        <Button buttonStyle="btn--white--solid"> GET AN INVITE </Button>
                    </Router>
                </div>
            </div>
            
            <div className="heroSection__image">
                <img src={heroImage} alt="hero" />
            </div>
        </section>
    )
}

export default Hero
