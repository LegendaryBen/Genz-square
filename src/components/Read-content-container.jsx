import React from 'react'
import { Link } from 'react-router-dom'
import Various_price from './Various-price'
import Other_magazine_stories from './Other-magazine-stories'


const Read_content_container = ({data,data2,skip,type}) => {
    return (
        <div className='Read-content-container'>
            <div className="Hidden-content">
                <div className="content">
                    {data.body.length > 12364 ? data.body.slice(0,6182)+"..." :data.body}
                </div>
                <div className="overlay-content"></div>
                <div className="overlay-prices">
                    <div className="subscriber">
                        <div>Already a subscriber?</div>
                        <Link to="/login">Sign in</Link>
                    </div>
                    <div className="percent-off">
                        Get all access to Gen-zsquare.com for <span>15% off</span>, plus:
                    </div>
                    <ul className='benefits'>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                        <li>Unlock Premium content</li>
                    </ul>
                    <div className="hidden-prices">
                        <Various_price/>
                        <Various_price/>
                        <Various_price/>
                    </div>
                </div>
            </div>
            <Other_magazine_stories  skip={skip} data={data2} type={type}/>
        </div>
    )
}

export default Read_content_container
