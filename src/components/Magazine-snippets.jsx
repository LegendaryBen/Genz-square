import React from 'react'
import Arrow from './Arrow'
import map from '../images/map.jpg'
import tiny from '../images/tiny.svg'
import { Link } from 'react-router-dom'

const Magazine_snippets = ({data}) => {

    return (
        <Link to={`/magazine/${data.id}`} className='Magazine-snippets'>
            <div className='Magazine-snippets-img'>
                <Arrow image={data.image} cls=''/>
            </div>
            <div className="Magazine-snippets-info">
                <div className="snippets-topic">
                    Magazine
                </div>
                <div className="snippet-msg">
                    {data.title.length > 118 ? data.title.slice(0,114)+"...":data.title}
                </div>
                <div className="snippet-id">
                    <Arrow image={tiny}/>
                    <span>
                        GEN-Z SQUARE Magazine 
                    </span>
                </div>
                <div className="snippet-date">
                    {data.date_added}
                </div>
            </div>
        </Link>
    )
}

export default Magazine_snippets
