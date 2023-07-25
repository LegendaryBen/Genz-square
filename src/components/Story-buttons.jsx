import React from 'react'
import { Link } from 'react-router-dom'

const Story_buttons = ({text}) => {
    return (
        <>
            <Link className='Story-buttons'>
                {text}
            </Link>
        </>
    )
}

export default Story_buttons
