import React from 'react'
import Arrow from './Arrow'
import cancle from '../images/cancle1.svg'
import {Link} from 'react-router-dom'

const Cancle = (props) => {
    return (
        <div className="cancle">
            <Arrow image={cancle} />
            <div className="mobile-genz">
                GEN-Z SQUARE
            </div>
            <Link to="/">
                SUBSCRIBE
            </Link>
        </div>
    )
}

export default Cancle
