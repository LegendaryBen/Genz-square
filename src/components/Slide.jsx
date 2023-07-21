import React from 'react'
import { Link } from 'react-router-dom'
import sound from "../images/sound.jpg"

const Slide = () => {
    return (
        <div className='Slides'>
            <Link to='/'>
                <img src={sound} alt="sound"  className='slide-section'/>
                <div className='slide-section space'>
                    <div className='text'>
                        <span>Tech</span>
                    </div>
                    <div className='text-head'>
                        Meta to launch its Twitter clone Thursday as Elon Musk’s
                        platform drives away users with new limits and tech issues
                    </div>
                    <div className='text-hint'>
                        Twitter imposed view limits on users over the weekend, in what owner Elon Musk claimed was a
                        "temporary" measure to combat "data scraping."
                    </div>
                    <div className='text-writer'>
                        By Favsolomon
                    </div>
                    <div className='text-date'>
                        July 4, 2023
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Slide
