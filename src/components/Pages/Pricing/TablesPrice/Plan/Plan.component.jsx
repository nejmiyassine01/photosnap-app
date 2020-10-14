import React from 'react'
import { Link } from 'react-router-dom'
import './Plan.styles.scss'

function Plan({ title, planName, text, priceMonth, priceYear, month, year, btnName}) {
    return (
        <div className="plan">
            <div className={planName}>
                <div className="plan__container">
                    <div className="plan__content">
                        <h3>{title}</h3>
                        <p>{text}</p>
                        
                        <Link to="#" className={btnName}>
                        Pick Plan
                        </Link>
                    </div>
                    
                    <div className="plan__month">
                        <p>{priceMonth}</p>
                        <span>{month}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan
