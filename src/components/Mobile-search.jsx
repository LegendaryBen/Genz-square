import React from 'react'
import {Link} from 'react-router-dom'
import Arrow from './Arrow'
import search from '../images/small-search.svg'

const Mobile_search = () => {
    return (
        <div className='Mobile-search-box'>
            <div className="search-box">
                <Link to=''>
                    <Arrow image={search} cls/>
                </Link>
                <div className='input'>
                    <input type="text" placeholder='search anything...' />
                </div>
            </div>
            <Link to='/'>SIGN IN</Link>
        </div>
    )
}

export default Mobile_search
