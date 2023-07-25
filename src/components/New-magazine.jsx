import React from 'react'
import Arrow from './Arrow'
import notice from '../images/new.svg'
import Magazine from './Magazine'
import fancy from '../images/fancy.svg';

const New_magazine = () => {
    return (
        <div className='New-magazine'>
            <Arrow image={notice} cls="new"/>
            <Magazine text=" Magazine  For The Week" image={fancy}/>
        </div>
    )
}

export default New_magazine
