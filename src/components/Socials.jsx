import React from 'react'
import { Link } from 'react-router-dom'

const Socials = ({image}) => {
    return (
        <Link to='/'>
            <img src={image} alt=""  />
        </Link>
    )
}

export default Socials
