import React from 'react'
import mack from "../images/mack.jpg"
import Message from './Message'
import { Link } from 'react-router-dom'

const News_tip = () => {
    return (

        <div className='News-container'>
            <Link to="/" className='News-tip'>
                <div className='box box-special'>
                    <img src={mack} alt="" />
                </div>
                <Message/>
            </Link>
        </div>

        
    )
}

export default News_tip
