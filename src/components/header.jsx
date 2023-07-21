import React from 'react'
import ham from "../images/ham.svg"
import search from "../images/search.svg";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <img src={ham}  />
            <span>
                GEN-Z SQUARE
            </span>
            <div className='subscribe'>
                <Link to="/" className='sub-children sub-btn'>SUBSCRIBE</Link>
                <div className='sub-children sign-in'>
                    SIGN IN 
                </div>
                <img src={search} alt="" className='sub-children' />
            </div>
        </div>
    )
}

export default Header;
