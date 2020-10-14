import React from 'react'
import CompareImage from '../../../../assets/compare/Compare.PNG';
import './Compare.styles.scss'

function Compare() {
    return (
        <div className="compare">
            <h2>Compare</h2>
            <img src={CompareImage} alt="compareImage" />
        </div>
    )
}

export default Compare
