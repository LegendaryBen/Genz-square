import React from 'react'
import Full_story_container from './Full-story-container'
import Other_magazine_stories from './Other-magazine-stories'

const Show_full_story = ({text, to}) => {
    return (
        <div className='Show-full-story'>
            <Full_story_container text={text} to={to}/>
            <Other_magazine_stories cls='Other-magazine-stories2'/>
        </div>
    )
}

export default Show_full_story
