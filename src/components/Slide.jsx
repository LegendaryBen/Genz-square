import React from 'react'
import { Link } from 'react-router-dom'
import sound from "../images/sound.jpg"

const Slide = ({data}) => {


    return (
        <div className='Slides'>
            <Link to='/'>
                <img src={data.image} alt="sound"  className='slide-section'/>
                <div className='slide-section space'>
                    <div className='text'>
                        <span>{data.category}</span>
                    </div>
                    <div className='text-head'>
                        {data.title.length > 137 ? data.title.slice(0,130)+'...':data.title }
                    </div>
                    <div className='text-hint'>
                        {data.intro.length > 167 ? data.intro.slice(0,155)+"...":data.intro}
                    </div>
                    <div className='text-writer'>
                        {data.author}
                    </div>
                    <div className='text-date'>
                        {data.date_added}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Slide
