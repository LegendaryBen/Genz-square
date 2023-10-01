import React from 'react'
import Header from '../components/header'
import Category from '../components/categories'
import New_magazine from '../components/New-magazine'
import Seperator from '../components/Seperator'
import Latest from '../components/Latest'
import User_subscribed_magazines from '../components/User-subscribed-magazines'
import Owned_magazines from '../components/Owned-magazines'
import Footer from '../components/Footer'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'




const User = () => {
    return (
        <>
            <Header/>
            <Category margin="margin"/>
            <Seperator/>
            <New_magazine back="swap"/>
            <Latest/>
            <User_subscribed_magazines/>
            <Owned_magazines/>
            <Footer/>
            <Search_Bar/>
            <Ham_menu/>
        </>
    )
}

export default User
