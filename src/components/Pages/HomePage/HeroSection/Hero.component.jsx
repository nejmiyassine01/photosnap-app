import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from '../Button/Button.component';
import heroImage from '../../../../assets/home/desktop/create-and-share.jpg'
// import heroImageTablet from '../../../../assets/home/tablet/create-and-share.jpg'
// import heroImageMobile from '../../../../assets/home/mobile/create-and-share.jpg'
import './Hero.styles.scss';

function Hero() {
    return (
        <section className="heroSection">
            <div className="heroSection__container">
                <div className="heroSection__container--content">
                    <h2>CREATE AND SHARE YOUR PHOTO STORIES.</h2>
                    <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>    

                    <Router>
                        <Button buttonStyle="btn--white--solid"> GET AN INVITE </Button>
                    </Router>
                </div>
            </div>
            
            <div className="heroSection__image">
            {/* <picture>
                    <source srcSet={`${heroImageTablet} 1x`} media="(max-width: 1190px)" />
                    <source srcSet={`${heroImageTablet} 1x`} media="(max-width: 901px)" />
                    <img
                        className=""
                        srcSet={`${heroImage} 2x`}
                        alt="testimonialsImg" 
                    />
                </picture> */}
                <img src={heroImage} alt="hero" />
            </div>
        </section>
    )
}

export default Hero
