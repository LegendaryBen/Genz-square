import React from 'react'
import Magazine from './Magazine'
import smallImg from "../images/small fancy.svg";

const Stories = (props) => {
    return (
        <div className='Stories'>
            <Magazine text="See Stories By Topic" image={smallImg}/>
        </div>
    )
}

export default Stories
