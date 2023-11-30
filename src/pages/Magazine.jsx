import {useContext} from 'react'
import Header from '../components/header'
import Category from '../components/categories'
import Read_Magazine from '../components/Read-Magazine'
import Read_content_container from '../components/Read-content-container'
import Footer from '../components/Footer'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'
import Show_full_story from '../components/Show-full-story'
import { User } from '../contexts/Auth'
import useLogin from '../custom hooks/useLogin'
import useResetSlide from '../custom hooks/useResetSlide'





const Magazine = () => {

    const{login,setLogin} = useContext(User);

    useLogin(setLogin);

    useResetSlide();


    return (
        <>
            <Header/>
            <Category margin="margin"/>
            <Read_Magazine/>
            {!login && <Read_content_container/>}
            {login && <Show_full_story text='Go to magazine' to='/'/>}
            <Footer/>
            <Search_Bar/>
            <Ham_menu/>
        </>
    )
}

export default Magazine
