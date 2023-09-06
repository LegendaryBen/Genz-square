import React from 'react'
import Arrow from './Arrow'
import map from '../images/map.jpg'
import genz from '../images/gen-z.svg'
import { Link } from 'react-router-dom'

const More_stories_card = () => {
    return (
        <Link className='more-stories-card'>
            <Arrow image={map} />
            <div className="more-stories-content">
                <div className="content-header">
                    Magazine
                </div>
                <div className="content-body">
                    Why is inflation still so bad? Extreme-low unemployment
                    rates in these states are a major factor
                </div>
                <div className="company-name">
                    <Arrow image={genz}/>
                    <div>
                        GEN-Z SQUARE Magazine
                    </div>
                </div>
                <div className="content-date">
                    July 4, 2023
                </div>
            </div>
        </Link>
    )
}

export default More_stories_card
