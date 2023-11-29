import {useContext} from 'react'
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
import useResetSlide from '../custom hooks/useResetSlide'
import useLogin from '../custom hooks/useLogin'
import { User } from '../contexts/Auth'
import { Navigate } from 'react-router-dom'



const Users = () => {

    const{login,setLogin} = useContext(User);

    useResetSlide()

    useLogin(setLogin)

    return login == true ? (
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
    ):<Navigate to="/"/>
}

export default Users
