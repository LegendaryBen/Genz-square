import React from 'react'
import gen from '../images/gen-z.svg'
import { Link } from 'react-router-dom'

const Search_cards = ({info}) => {
    return (
        <Link className='search-cards' to={`/trending/${info.id}`}>
            <div className="search-card-topic">
                {info.category}
            </div>
            <div className="search-card-hint">
              {info.title > 96 ? info.title.slice(0,93)+"...":info.title}
            </div>
            <div className="search-card-company">
                <img src={gen} alt="" />
                <span>GEN-Z SQUARE Magazine</span>
            </div>
            <div className="search-card-date">
                {info.date_added}
            </div>
        </Link>
    )
}

export default Search_cards
