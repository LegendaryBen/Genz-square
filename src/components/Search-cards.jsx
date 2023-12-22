import React from 'react'
import gen from '../images/gen-z.svg'
import { Link } from 'react-router-dom'

const Search_cards = (props) => {
    return (
        <Link className='search-cards'>
            <div className="search-card-topic">
                Magazine
            </div>
            <div className="search-card-hint">
                Why is inflation still so bad? Extreme-low unemployment rates in these states are
                 a major factor
            </div>
            <div className="search-card-company">
                <img src={gen} alt="" />
                <span>GEN-Z SQUARE Magazine</span>
            </div>
            <div className="search-card-date">
                July 4, 2023
            </div>
        </Link>
    )
}

export default Search_cards
