import React from 'react'
import { Link } from 'react-router-dom'

const Sign_in = () => {
    return (
        <div className='sign-in'>
            <div className="sign-up-text">
                Already have an account?<Link to=''>Log In</Link>
            </div>
        </div>
    )
}

export default Sign_in
