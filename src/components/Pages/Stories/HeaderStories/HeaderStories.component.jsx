import React from 'react'
import './HeaderStories.styles.scss';
import Button from '../../HomePage/Button/Button.component'

function HeaderStories() {
    return (
        <div className="headerStories">
            <div className="headerStories__img"></div>

            <div className="headerStories__container">
                <div className="headerStories__content">
                    <h6>LAST MONTH'S FEATURED STORY</h6>
                    <h1>HAZY FULL MOON OF APPALACHIA</h1>
                    <div>
                        <p className="headerStories__content--date">
                            March 2nd 2020
                        </p>
                        <p className="headerStories__content--span">by John Appleseed</p>
                    </div>
                    <p className="headerStories__content--text">The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                    <Button>Read the story</Button>
                </div>
            </div>
        </div>
    )
}

export default HeaderStories
