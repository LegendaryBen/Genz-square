import React from 'react'
import Arrow from './Arrow'


const Magazine = ({text,image}) => {
    return (
        <div className='magazine'>
            <span>{text}</span><br/>
            <Arrow image={image} cls="fancy"/>
        </div>
    )
}

export default Magazine
