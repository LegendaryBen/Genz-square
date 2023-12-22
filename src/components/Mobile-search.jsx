import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import Arrow from './Arrow'
import search from '../images/small-search.svg'
import { User } from '../contexts/Auth'

const Mobile_search = () => {

    const{setLogin} = useContext(User);
    let login = localStorage.getItem("gen-z") || '';
    const[searching,setSearching] = useState('');



    return (
        <div className='Mobile-search-box'>
            <div className="search-box">
                <Link to={`/search/${searching}`}>
                    <Arrow image={search} cls/>
                </Link>
                <div className='input'>
                    <input type="text" placeholder='search anything...'  onChange={(e)=>{setSearching(e.target.value)}} />
                </div>
            </div>
            { login == '' && <Link to='/login'>SIGN IN</Link>}
        </div>
    )
}

export default Mobile_search
