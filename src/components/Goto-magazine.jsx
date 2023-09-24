import React from 'react'
import { Link } from 'react-router-dom'

const Goto_magazine = ({text,to}) => {
    return (
        <Link className='Goto-magazine' to={to}>
            {text}
        </Link>
    )
}

export default Goto_magazine
