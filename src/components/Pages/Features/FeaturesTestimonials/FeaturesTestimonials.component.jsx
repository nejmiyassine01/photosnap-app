import React from 'react'
import './FeaturesTestimonials.styles.scss';
import { Testimonialsfeatures } from '../../HomePage/Testimonials/TestimonialsItems';
import '../../HomePage/Testimonials/Testimonials.styles.scss';

function FeaturesTestimonials() {
    return (
        <div className="featuresTest testimonials">
            {Testimonialsfeatures.map((item, index) => (
                <div className="featuresTest__container testimonials__container" key={index}>
                    <div className="featuresTest__img testimonials__img">
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

export default FeaturesTestimonials
