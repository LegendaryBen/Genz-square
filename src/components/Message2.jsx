import React from 'react'
import tiny from '../images/tiny.svg'
import { Link } from 'react-router-dom'



const Message2 = ({data}) => {


    return (
        <div className='box-special2'>
            <div className='box-text2'>
                <span>{data[0].category}</span>
            </div>
            <div className='box-header2'>
                {data[0].title.length > 57 ? data[0].title.slice(0,50)+"..." : data[0].title }
            </div>
            <div className='box-hint2'>
                {data[0].intro.length > 296 ? data[0].intro.slice(0,200)+"..." : data[0].intro }
            </div>
            <div className="tiny">
                <img src={tiny} alt="" />
                <span>GEN-Z SQUARE Magazine</span>
            </div>
            <div className='box-special1-date'>
                {data[0].date_added}
            </div>
            <Link to={`/magazine/${data[0].id}`} className="readmore">
                Read More
            </Link>
        </div>
    )
}

export default Message2
