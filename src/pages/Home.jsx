import React from 'react'
import Category from '../components/categories'
import News_tip from '../components/News-tip'
import News_slides from '../components/News-slides'

const Home = () => {
    return (
        <>
            <Category margin="90px"/>
            <News_tip />
            <News_slides/>
        </>
    )
}

export default Home
