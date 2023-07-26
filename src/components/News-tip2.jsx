import React from 'react'
import { Link } from 'react-router-dom'
import box from "../images/box.jpg"
import Message2 from './Message2'


const News_tip2 = (props) => {
    return (
        <div className='News-container'>
            <div to="/" className='News-tip2'>
                <div className='box-special1'>
                    <img src={box}  />
                </div>
                <Message2/>
            </div>
        </div>
    )
}

export default News_tip2
