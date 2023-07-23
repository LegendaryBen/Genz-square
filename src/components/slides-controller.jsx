import React from 'react'
import Arrow from './Arrow'
import arrowleft from "../images/arrowleft.svg"
import arrowright from "../images/arrowright.svg"

const Slides_controller = () => {
    return (
        <div className='arrow-parent-container'>
            <div className='arrow-container' >
                <Arrow image={arrowleft}/>
                <Arrow image={arrowright}/>
            </div>
        </div>
    )
}

export default Slides_controller
