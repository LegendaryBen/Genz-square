import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Navogations from '../components/Navogations'
import Arrow from '../components/Arrow'
import linked from '../images/linkedin.svg'
import fb from '../images/fb.svg'
import twitter from '../images/twitter.svg'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'


const profile = () => {
    return (
        <>
            <Header/>
            <div className='nav-container'>
                <Navogations/>
                <div className='changing-sections'>
                    <Outlet/>
                </div>
            </div>
            <div className="settings-footer">
                <div className='setting-copy'>
                    Copyright © 2023 Gen-Z Square, LLC All rights reserved. Gen-Z Square® and its related marks are registered trademarks of Gen-Z Square LLC
                </div>
                <div className='setting-icons'>
                    <Arrow image={fb}/>
                    <Arrow image={linked}/>
                    <Arrow image={twitter}/>
                </div>
            </div>
            <Search_Bar/>
            <Ham_menu/>
        </>
    )
}

export default profile