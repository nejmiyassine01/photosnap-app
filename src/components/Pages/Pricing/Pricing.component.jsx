import React from 'react'
import Beta from '../Features/Beta/Beta.component'
import Compare from '../Stories/Compare/Compare.component'
import PricingHero from './PricingHero/PricingHero.component'
import TablesPrice from './TablesPrice/TablesPrice.component'


const Pricing = () => {
    return (
        <>
            <PricingHero />
            <TablesPrice />
            <Compare />
            <Beta />
        </>
    )
}

export default Pricing
