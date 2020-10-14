import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import { HomeSec } from './HomeSec'
import { Button } from '../Button/Button.component';

import './HomeSection.styles.scss'

const HomeSection = () => {
    return (
        <>
            {HomeSec.map((item, index) => (
                <section className={`homeSection ${item.cName}`} key={index}>
                    <div className="homeSection__container">
                        <div className="homeSection__container--content">
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>   

                            <Router>
                                <Button buttonStyle="btn--dark--solid"> VIEW THE STORIES </Button>
                            </Router>
                        </div>
                    </div>
                    
                    <div className="homeSection__images">
                        <img className="homeSection__image" src={item.src} alt="stories" />
                    </div>
                    
                </section>
            ))}
        </>

    )
}

export default HomeSection