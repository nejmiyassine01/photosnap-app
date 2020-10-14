import React from 'react'
import Beta from './Beta/Beta.component'
import FeaturesHero from './FeaturesHero/FeaturesHero.component'
import FeaturesTestimonials from './FeaturesTestimonials/FeaturesTestimonials.component'

const Features = () => {
    return (
        <>
            <FeaturesHero />
            <FeaturesTestimonials />
            <Beta />
        </>
    )
}

export default Features
