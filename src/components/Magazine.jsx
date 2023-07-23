import React from 'react'
import Arrow from './Arrow'
import fancy from '../images/fancy.svg';

const Magazine = ({text}) => {
    return (
        <div className='magazine'>
            <span>{text}</span><br/>
            <Arrow image={fancy} cls="fancy"/>
        </div>
    )
}

export default Magazine
