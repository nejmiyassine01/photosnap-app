import React from 'react'
import { TestimonialsItems } from './TestimonialsItems';
import './Testimonials.styles.scss';
import { Link } from 'react-router-dom';

function Testimonials() {
    return (
        <div className="testimonials">
            {TestimonialsItems.map((item, index) => (
                <div className="testimonials__container" key={index}>
                    <div className="testimonials__img">
                        <img src={item.src} alt="testimonialsImg" />
                    </div>
                    
                    <div className="testimonials__text">
                        <h4>{item.title}</h4>
                        <p>
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Testimonials
