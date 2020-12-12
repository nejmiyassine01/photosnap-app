import React from 'react'
import Beta from '../Features/Beta/Beta.component'
import PricingHero from './PricingHero/PricingHero.component'
import TablesPrice from './TablesPrice/TablesPrice.component'

const Pricing = () => {
    return (
        <>
            <PricingHero />
            <TablesPrice />
            <Beta />
        </>
    )
}

export default Pricing
