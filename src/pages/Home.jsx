import React from 'react'
import Category from '../components/categories'
import News_tip from '../components/News-tip'
import News_slides from '../components/News-slides'
import Slides_controller from '../components/slides-controller'
import New_magazine from '../components/New-magazine'
import New_magazine2 from '../components/New-magazine2'
import Magazine_cover from '../components/Magazine-cover'
import Stories from '../components/Stories'
import Stories_button_container from '../components/Stories-button-container'
import News_tip2 from '../components/News-tip2'
import Magazine_snippets_container from '../components/Magazine-snippets-container'

const Home = () => {
    return (
        <>
            <Category margin="90px"/>
            <News_tip />
            <News_slides/>
            <Slides_controller/>
            <New_magazine/>
            <Magazine_cover/>
            <Stories/>
            <Stories_button_container/>
            <News_tip />
            <New_magazine2/>
            <News_tip2/>
            <Magazine_snippets_container/>
        </>
    )
}

export default Home
