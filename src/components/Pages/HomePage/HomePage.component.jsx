import React from 'react';

import Hero from './HeroSection/Hero.component';
import HomeSection from './HomeSection/HomeSection.component';
import Cards from './Cards/Cards.component';
import Testimonials from './Testimonials/Testimonials.component';

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeSection />
            <Cards />
            <Testimonials />
        </>
    )
}

export default HomePage
