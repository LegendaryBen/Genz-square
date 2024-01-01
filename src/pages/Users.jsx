import {useContext,useState,useLayoutEffect} from 'react'
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
import Error from '../components/Error'
import Loader from '../components/Loader'
import axios from 'axios'
import Viewer from '../components/Viewer'






const Users = () => {

    const{setLogin} = useContext(User);
    let login = localStorage.getItem("gen-z") || '';

    const[errors,setErrors] = useState("-150%");
    const[errorstate,setErrorstate] = useState("#00C24E");
    const[letter,setLetter]= useState('');
    const[load,setLoad]=useState(false);
    const[message,setMessage]=useState('');
    const[view,setView]=useState(false);



    function news(e){
        e.preventDefault();
        if(letter == ''){

            setMessage("Input field must not be empty!");
            setErrors("0%");
            setErrorstate("#d30000");
            setTimeout(()=>{
                setErrors("-150%");
            },4000)

        }else{
            setLoad(true);
            axios.post("https://gen-zsquare.com/api/newsLetter",{email:letter}).
            then(res=>{

                setLoad(false);
                setErrorstate("#00C24E");
                setMessage(res.data.message);
                setErrors("0%");
                setLetter('')
                setTimeout(()=>{
                    setErrors("-150%");
                },4000)

            }).catch(res=>{
                if(res.message == "Network Error"){

                    setErrorstate("#d30000");
                    setMessage(res.response.data.email.join(''));
                    setErrors("0%");
                    setLoad(false);
                    setTimeout(()=>{
                        setErrors("-150%");
                    },4000)

                }else{

                    setErrorstate("#d30000");
                    setMessage(res.response.data.email.join(''));
                    setErrors("0%");
                    setLoad(false);
                    setTimeout(()=>{
                        setErrors("-150%");
                    },4000)

                }

            })
        }
    }


    const show = ()=>{
        setView(true)
    }


    useResetSlide()

    useLogin(setLogin)

    return login !== '' ? (
        <>
            <Header/>
            <Category margin="margin"/>
            <Seperator/>
            <New_magazine back="swap"/>
            <Latest/>
            <User_subscribed_magazines/>
            <Owned_magazines show={show}/>
            <Footer click={news} change={setLetter} value={letter}/>
            <Search_Bar/>
            <Ham_menu/>
            <Error color={errorstate} top={errors} message={message} click={setErrors}/>
            {view && <Viewer hide={setView}/>}
            {load&&<Loader/>}
        </>
    ):<Navigate to="/"/>
}

export default Users
