import React from 'react'
import { StoryItems } from '../../HomePage/Cards/Card';
import '../../HomePage/Cards/Cards.styles.scss';
import { Link } from 'react-router-dom';

function CardStories() {
    return (
        <div className="card">
            {StoryItems.map((item, index) => (
                <div className="card__box" key={index}>
                    <Link to="#" className="card__link">
                        <div className="card__images">
                            <img className="card__image" src={item.src} alt="card" />
                        </div>

                        <div className="card__container">
                            <h4>{item.title}</h4>
                            <p>{item.subtite}</p>
                            <hr />
                            
                            <div className="card__story">
                                <h5>Read story</h5>

                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                                    <g fill="none" fillRule="evenodd" stroke="#fff">
                                        <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default CardStories
