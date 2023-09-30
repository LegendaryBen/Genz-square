import React from 'react'
import Header from '../components/header'
import Category from '../components/categories'
import New_magazine from '../components/New-magazine'
import Seperator from '../components/Seperator'
import Latest from '../components/Latest'




const User = () => {
    return (
        <>
            <Header/>
            <Category margin="margin"/>
            <Seperator/>
            <New_magazine back="swap"/>
            <Latest/>
        </>
    )
}

export default User
