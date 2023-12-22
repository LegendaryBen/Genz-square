import {useContext,useState} from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import Header from '../components/header'
import Navogations from '../components/Navogations'
import Arrow from '../components/Arrow'
import linked from '../images/linkedin.svg'
import fb from '../images/fb.svg'
import twitter from '../images/twitter.svg'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'
import Delete from '../components/Delete'
import useResetSlide from '../custom hooks/useResetSlide'
import useLogin from '../custom hooks/useLogin'
import { User } from '../contexts/Auth'
import Error from '../components/Error'


const profile = () => {

    const{setLogin} = useContext(User);
    let login = localStorage.getItem("gen-z") || '';
    const[clean,setClean] = useState(false);

    const[message,setMessage]=useState('');
    const[errors,setErrors] = useState("-150%");
    const[errorstate,setErrorstate] = useState("#00C24E");


    useLogin(setLogin)

    useResetSlide()

    return login !== '' ? (
        <>
            <Header/>
            <div className='nav-container'>
                <Navogations clean={setClean}/>
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
            <Error color={errorstate} top={errors} message={message} click={setErrors}/>
            {clean && <Delete clean={setClean} errors={setErrors} errorstate={setErrorstate} message={setMessage}/>}
        </>
    ):<Navigate to="/"/>
}

export default profile