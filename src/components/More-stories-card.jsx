import React from 'react'
import Arrow from './Arrow'
import map from '../images/map.jpg'
import genz from '../images/gen-z.svg'
import { Link } from 'react-router-dom'

const More_stories_card = ({data,type}) => {
    return (
        <Link className='more-stories-card' to={`/${type}/${data.id}`}>
            <Arrow image={data.image} />
            <div className="more-stories-content">
                <div className="content-header">
                    {data.category}
                </div>
                <div className="content-body">
                    {data.title.length > 118 ? data.title.slice(0,112)+"...":data.title}
                </div>
                <div className="company-name">
                    <Arrow image={genz}/>
                    <div>
                        GEN-Z SQUARE 
                    </div>
                </div>
                <div className="content-date">
                    {data.date_added}
                </div>
            </div>
        </Link>
    )
}

export default More_stories_card
