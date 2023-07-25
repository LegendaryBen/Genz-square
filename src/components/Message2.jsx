import React from 'react'
import tiny from '../images/tiny.svg'
import { Link } from 'react-router-dom'

const Message2 = (props) => {
    return (
        <div className='box-special2'>
            <div className='box-text2'>
                <span>Tech</span>
            </div>
            <div className='box-header2'>
                Unboxing the delightful UX of Apple’s boxes
            </div>
            <div className='box-hint2'>
                Have you ever unboxed an Apple product? If so, chances are you remember the experience.
                The sensation of lifting the perfectly fitted lid, the first glimpse of the 
                gleaming device nestled within, even the faint new-product smell that accompanies it.
            </div>
            <div className="tiny">
                <img src={tiny} alt="" />
                <span>GEN-Z SQUARE Magazine</span>
            </div>
            <div className='box-special1-date'>
                August, 2023 
            </div>
            <Link className="readmore">
                Read More
            </Link>
        </div>
    )
}

export default Message2
