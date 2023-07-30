import React from 'react'
import Category2 from './categories2'
import Arrow from './Arrow'
import cancle from '../images/cancle1.svg'
import search from '../images/small-search.svg'

const Search_Bar = () => {
    return (
        <div className='search-bar'>
            <Category2 margin='0px'/>
            <div className="search-box">
                <div className="search-items">
                    <Arrow image={cancle} cls=''/>
                    <div className="search-item">
                        <input type="text" placeholder='search anything...'/>
                    </div>
                    <Arrow image={search} cls=''/>
                </div>
            </div>
        </div>
    )
}

export default Search_Bar
