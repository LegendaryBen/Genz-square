import React from 'react'
import { Link } from 'react-router-dom'

const Sign_in = ({text,suggest,to}) => {
    return (
        <div className='sign-in'>
            <div className="sign-up-text">
                {suggest}<Link to={to}>{text}</Link>
            </div>
        </div>
    )
}

export default Sign_in
