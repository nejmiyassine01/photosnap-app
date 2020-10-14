import React from 'react'
import './FeaturesHero.styles.scss'
import '../../HomePage/HeroSection/Hero.styles.scss';
import featuresImage from '../../../../assets/features/desktop/hero.jpg'

function FeaturesHero() {
    return (
        <section className="features heroSection">
            <div className="features__container heroSection__container">
                <div className="heroSection__container--content">
                    <h1>FEATURES</h1>
                    <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>    
                </div>
            </div>

            <div className="heroSection__image">
                <img src={featuresImage} alt="hero" />
            </div>
        </section>
    )
}

export default FeaturesHero
