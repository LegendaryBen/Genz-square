import React,{useContext} from 'react'
import ham from "../images/ham.svg"
import search from "../images/search.svg";
import { Link } from 'react-router-dom'
import { Search } from '../contexts/Searchbar';
import { Ham } from '../contexts/Hambar';

const Header = () => {
    const{slideOut} = useContext(Ham);
    const {down} = useContext(Search);
    return (
        <div className='Header'>
            <img src={ham} onClick={slideOut}/>
            <span>
                GEN-Z SQUARE
            </span>
            <div className='subscribe'>
                <Link to="" className='sub-children sub-btn'>SUBSCRIBE</Link>
                <Link to='' className='sub-children sign-in'>
                    SIGN IN 
                </Link>
                <img src={search} alt="" className='sub-children' onClick={down} />
            </div>
        </div>
    )
}

export default Header;
