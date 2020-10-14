import React, { useState } from 'react'
import Plan from './Plan/Plan.component'
import { PlanData } from './Plan/PlanData'
import './TablesPrice.styles.scss'

function TablesPrice() {
    const [toggle, setToggle] = useState(false);

    const ChangePrice = () => setToggle(!toggle); 
    
    return (
        <div className="price">
            <div className="price__switcher">
                <span className={toggle ? "price__monthly" : "price__monthly active"}>Monthly</span>
                <div onClick={ChangePrice} className={toggle ? "price__switch active" : "price__switch"}>
                    <div className={toggle ? "price__notch active" : "price__notch"}></div>
                </div>
                <span className={toggle ? "price__yearly active" : "price__yearly"}>Yearly</span>
            </div>

            <div className="price__boxes">
                {PlanData.map((item, index) => (
                    <Plan 
                        key={index}
                        title={item.title}
                        planName={item.planName}
                        text={item.text}
                        priceMonth={toggle ? item.priceYear : item.priceMonth}
                        month={toggle ? item.year : item.month}
                        btnName={item.btnName}
                    />
                ))}
            </div>
        </div>
    )
}

export default TablesPrice
