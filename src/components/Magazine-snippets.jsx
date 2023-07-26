import React from 'react'
import Arrow from './Arrow'
import map from '../images/map.jpg'
import tiny from '../images/tiny.svg'
import { Link } from 'react-router-dom'

const Magazine_snippets = () => {
    return (
        <Link to='/'className='Magazine-snippets'>
            <div className='Magazine-snippets-img'>
                <Arrow image={map} cls=''/>
            </div>
            <div className="Magazine-snippets-info">
                <div className="snippets-topic">
                    Magazine
                </div>
                <div className="snippet-msg">
                    Why is inflation still so bad? Extreme-low unemployment
                    rates in these states are a major factor
                </div>
                <div className="snippet-id">
                    <Arrow image={tiny}/>
                    <span>
                        GEN-Z SQUARE Magazine 
                    </span>
                </div>
                <div className="snippet-date">
                    July 4, 2023
                </div>
            </div>
        </Link>
    )
}

export default Magazine_snippets
