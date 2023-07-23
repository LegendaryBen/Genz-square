import React from 'react'
import genz from '../images/gen-z.svg'
import { Link } from 'react-router-dom'

const Magazine_cover_details = () => {
    return (
        <div className='cover-details'>
            <div className='logo'>
                <img src={genz} />
                <span>
                    GEN-Z SQUARE
                </span>
            </div>
            <div className='month-sales'>
                August Sale
            </div>
            <div className='access'>
                Get all access to Gen-zsquare.com for <span className='access-special'>15% off</span>, plus:
            </div>
            <ul>
                <li>Unlock Premium Content</li>
                <li>Unlock Premium Content</li>
                <li>Unlock Premium Content</li>
                <li>Unlock Premium Content</li>
                <li>Unlock Premium Content</li>
                <li>Unlock Premium Content</li>
            </ul>
            <div className="code">
                And so much more! Use code  <span className='code-special'>GZSQUARE70</span> 
            </div>
            <Link to="/">Learn More</Link>
        </div>
    )
}

export default Magazine_cover_details
