import React, { useEffect } from 'react'
import Category from '../components/categories'
import News_tip from '../components/News-tip'
import News_slides from '../components/News-slides'
import Slides_controller from '../components/slides-controller'
import New_magazine from '../components/New-magazine'
import Magazine_cover from '../components/Magazine-cover'

const Home = () => {
    return (
        <>
            <Category margin="90px"/>
            <News_tip />
            <News_slides/>
            <Slides_controller/>
            <New_magazine/>
            <Magazine_cover/>
        </>
    )
}

export default Home
