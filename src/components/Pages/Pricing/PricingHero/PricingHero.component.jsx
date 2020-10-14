import React from 'react'
import PricingImage from '../../../../assets/pricing/desktop/hero.jpg'
import '../../Features/FeaturesHero/FeaturesHero.styles.scss'

function PricingHero() {
    return (
        <div>
            <section className="features heroSection">
                <div className="features__container heroSection__container">
                    <div className="heroSection__container--content">
                        <h1>PRICING</h1>
                        <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>    
                    </div>
                </div>

                <div className="heroSection__image">
                    <img src={PricingImage} alt="hero" />
                </div>
            </section>
        </div>
    )
}

export default PricingHero
