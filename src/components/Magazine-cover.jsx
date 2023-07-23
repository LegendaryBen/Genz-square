import React from 'react'
import Arrow from './Arrow'
import cover from '../images/cover.jpg'
import Magazine_cover_details from './Magazine-cover-details'

const Magazine_cover = () => {
    return (
        <div className='Magazine-cover'>
            <div className='cover main-cover'>
                <div className='img-cover1'>
                    <Arrow image={cover} cls="img-cover"/>
                    <div className='month'>
                        August 2023
                    </div>
                </div>
            </div>
            <Magazine_cover_details/>
        </div>
    )
}

export default Magazine_cover
