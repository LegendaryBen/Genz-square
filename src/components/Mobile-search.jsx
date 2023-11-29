import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import Arrow from './Arrow'
import search from '../images/small-search.svg'
import { User } from '../contexts/Auth'

const Mobile_search = () => {

    const{login,setLogin} = useContext(User);


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
            { !login && <Link to='/login'>SIGN IN</Link>}
        </div>
    )
}

export default Mobile_search
