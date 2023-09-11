import React from 'react'
import More_stories_card from './More-stories-card'

const Other_magazine_stories = ({cls}) => {
    return (
        <div className={`${cls ? cls : "Other-magazine-stories"}`}>
            <div className="more-stories-header">
                    More stories
            </div>
            <More_stories_card/>
            <More_stories_card/>
            <More_stories_card/>
        </div>
    )
}

export default Other_magazine_stories
