import React from 'react'
import './Hero.style.scss'

function Hero() {
    return (
        <section className="home">

            <div className="hero-content">
                <div>
                    <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                    <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>    

                    <div className="hero-btn">
                        <a href="#get">
                            GET AN INVITE
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="hero-image">

            </div>
        </section>
    )
}

export default Hero
