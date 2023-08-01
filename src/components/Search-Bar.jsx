import React,{useContext} from 'react'
import Category2 from './categories2'
import Arrow from './Arrow'
import cancle from '../images/cancle1.svg'
import search from '../images/small-search.svg'
import {Link} from 'react-router-dom'
import {Search} from '../contexts/Searchbar'

const Search_Bar = () => {

    let { drop,up} = useContext(Search);


    return (
        <div className='search-bar' style={{top:!drop?"-200%":"0%"}}>

            <Category2 margin='0px'/>
            <div className="search-box">
                <div className="search-items">
                    <Arrow image={cancle} cls='' act={up} />
                    <div className="search-item">
                        <input type="text" placeholder='search anything...'/>
                    </div>
                    <Link>
                        <Arrow image={search} cls=''/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Search_Bar
