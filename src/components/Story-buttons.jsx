import React from 'react'
import { Link } from 'react-router-dom'

const Story_buttons = ({text,change,story}) => {
    return (
        <>
            <Link className='Story-buttons' onClick={()=>{change(story)}}>
                {text}
            </Link>
        </>
    )
}

export default Story_buttons
