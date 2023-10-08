import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Navogations from '../components/Navogations'

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
        </>
    )
}

export default profile