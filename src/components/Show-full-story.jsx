import React from 'react'
import Full_story_container from './Full-story-container'
import Other_magazine_stories from './Other-magazine-stories'

const Show_full_story = ({text, to,skip,data,current}) => {
    return (
        <div className='Show-full-story'>
            <Full_story_container text={text} to={to} data={current}/>
            <Other_magazine_stories cls='Other-magazine-stories2' skip={skip} data={data}/>
        </div>
    )
}

export default Show_full_story
