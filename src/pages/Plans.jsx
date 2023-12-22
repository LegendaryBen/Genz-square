import React from 'react'
import { Link } from 'react-router-dom'
import Various_price from '../components/Various-price'


const Plans = (props) => {
    return (
        <>
            <div className="Hidden-content hide-it">  
                <div className="overlay-prices fill-it">
                    <div className="percent-off">
                        Get all access to Gen-zsquare.com for <span>15% off</span>, plus:
                    </div>
                    <ul className='benefits'>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                    </ul>
                    <div className="hidden-prices">
                        <Various_price/>
                        <Various_price/>
                        <Various_price/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans
