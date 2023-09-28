import React from 'react'
import Header from '../components/header'
import Category from '../components/categories'
import Read_Magazine from '../components/Read-Magazine'
import Show_full_story from '../components/Show-full-story'
import Footer from '../components/Footer'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'


const Trending = () => {
    return (
        <>
            <Header/>
            <Category margin="margin"/>
            <Read_Magazine/>
            <Show_full_story text='Go back home' to='/'/>
            <Footer/>
            <Search_Bar/>
            <Ham_menu/>
        </>
    )
}

export default Trending
