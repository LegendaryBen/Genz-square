import React from 'react'
import Arrow from './Arrow'
import star from '../images/start.svg'
import Magazine from './Magazine'
import fancy from '../images/fancy.svg';

const New_magazine2 = () => {
    return (
        <div className='New-magazine2'>
            <Arrow image={star} cls="new2"/>
            <Magazine text="From The Magazine " image={fancy}/>
        </div>
    )
}

export default New_magazine2
