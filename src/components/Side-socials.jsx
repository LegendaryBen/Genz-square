import React from 'react'
import {Link} from 'react-router-dom'
import Arrow from './Arrow'
import linked from '../images/linkedin.svg'
import fb from '../images/fb.svg'
import twitter from '../images/twitter.svg'

const Side_socials = () => {
    return (
        <div className='side-socials'>
            <Link to=''>
                <Arrow image={linked} cls=''/>
            </Link>
            <Link to=''>
                <Arrow image={fb} cls=''/>
            </Link>
            <Link to=''>
                <Arrow image={twitter} cls=''/>
            </Link>
        </div>
    )
}

export default Side_socials
