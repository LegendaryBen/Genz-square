import React from 'react'
import Arrow from './Arrow'
import notice from '../images/new.svg'
import Magazine from './Magazine'

const New_magazine = () => {
    return (
        <div className='New-magazine'>
            <Arrow image={notice} cls="new"/>
            <Magazine text=" Magazine  For The Week"/>
        </div>
    )
}

export default New_magazine
