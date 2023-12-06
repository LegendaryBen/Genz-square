import React from 'react'
import Goto_magazine from './Goto-magazine'

const Full_story_container = ({text,to,data}) => {
    return (
        <div className='full-story-container'>
            <div className='story-text'>
                {data.body}
                <Goto_magazine text={text} to={to}/>
            </div>
        </div>
    )
}

export default Full_story_container
