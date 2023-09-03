import React from 'react'
import Header from '../components/header'
import Category from '../components/categories'
import Read_Magazine from '../components/Read-Magazine'
import Read_content_container from '../components/Read-content-container'
import Footer from '../components/Footer'

const Magazine = (props) => {
    return (
        <>
            <Header/>
            <Category margin="90px"/>
            <Read_Magazine/>
            <Read_content_container/>
            <Footer/>
        </>
    )
}

export default Magazine
