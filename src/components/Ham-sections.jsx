import React from 'react'
import {Link} from 'react-router-dom'

const Ham_sections = ({section}) => {
    return (
        <div className='ham-sections'>
            <Link to='/'>
                {section}
            </Link>
        </div>
    )
}

export default Ham_sections
