import React from 'react'
import Arrow from './Arrow'
import search from '../images/sub-search.svg'

const Subscription_search = () => {
    return (
        <div className='sub-search'>
            <Arrow image={search}/>
            <input type="text" name="" id=""  placeholder='Search...'/>
        </div>
    )
}

export default Subscription_search
