import React from 'react'
import Header from '../components/header'
import Category from '../components/categories'
import Read_Magazine from '../components/Read-Magazine'

const Magazine = (props) => {
    return (
        <>
            <Header/>
            <Category margin="90px"/>
            <Read_Magazine/>
        </>
    )
}

export default Magazine
