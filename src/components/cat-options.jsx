import React from 'react'
import { Link } from 'react-router-dom';

const Cat_options = ({name}) => {
    return (
        <Link to="/" className='cat-options'>{name}</Link>
    )
}

export default Cat_options;
