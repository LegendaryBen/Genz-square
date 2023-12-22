import React,{useContext} from 'react'
import ham from "../images/ham.svg"
import search from "../images/search.svg";
import { Link } from 'react-router-dom'
import { Search } from '../contexts/Searchbar';
import { Ham } from '../contexts/Hambar';
import Arrow from './Arrow';
import books from '../images/user-books.svg'
import user from '../images/user-icon.svg'
import dot from '../images/red-dot.svg'
import bell from '../images/bell.svg'
import { User  } from '../contexts/Auth';

const Header = () => {
    const{slideOut} = useContext(Ham);
    const {down} = useContext(Search);
    let login = localStorage.getItem("gen-z") || '';


    return (
        <div className='Header'>
            <img src={ham} onClick={slideOut} className='ham-fancy'/>
            <span>
                GEN-Z SQUARE
            </span>
            {
                login == '' ? 
                <div className='subscribe'>
                    <Link to="/sign-up" className='sub-children sub-btn'>SUBSCRIBE</Link>
                    <Link to='/login' className='sub-children sign-in'>
                        SIGN IN 
                    </Link>
                    <img src={search} alt="" className='sub-children' onClick={down} />
                </div>:
                <div className="subscribe2">
                    <Link className='sub-children' to='/user'>
                        <Arrow image={books} cls="no-dot"/>
                    </Link>
                    <Link className='sub-children' to='/notifications'>
                        <Arrow image={bell} cls="no-dot"/>
                        <Arrow image={dot} cls="dot"/>
                    </Link>
                    <Link to='/profile' className='sub-children'>
                        <Arrow image={user} cls="no-dot"/>
                    </Link>
                    <Link className='sub-children spec' onClick={down}>
                        <Arrow image={search} cls="no-dot"/>
                    </Link>
                </div>
            }
            
            
        </div>
    )
}

export default Header;
