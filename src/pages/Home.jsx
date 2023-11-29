import React,{useContext,useEffect} from 'react'
import { fetchHomestory } from '../Redux/features/landingpageSlice/landingpageSlice'
import Header from '../components/header'
import Category from '../components/categories'
import News_tip from '../components/News-tip'
import News_slides from '../components/News-slides'
import Slides_controller from '../components/slides-controller'
import New_magazine from '../components/New-magazine'
import New_magazine2 from '../components/New-magazine2'
import Magazine_cover from '../components/Magazine-cover'
import Stories from '../components/Stories'
import Stories_button_container from '../components/Stories-button-container'
import News_tip2 from '../components/News-tip2'
import Magazine_snippets_container from '../components/Magazine-snippets-container'
import Footer from '../components/Footer'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'
import useLogin from '../custom hooks/useLogin'
import  {User} from '../contexts/Auth'
import { useDispatch,useSelector } from 'react-redux'




const Home = () => {

    const{login,setLogin} = useContext(User);

    let newsData = useSelector(state=>state.landingpage.data);
    

    useLogin(setLogin);

    const dispatch = useDispatch();


    useEffect(()=>{

        dispatch(fetchHomestory());

    },[])



    return (
        <>
            <Header/>
            <Category margin="margin"/>
            <News_tip data={newsData}/>
            <News_slides/>
            <Slides_controller/>
            <New_magazine/>
            <Magazine_cover/>
            <Stories/>
            <Stories_button_container/>
            <News_tip data={newsData} />
            <New_magazine2/>
            <News_tip2/>
            <Magazine_snippets_container/>
            <Footer/>
            <Search_Bar/>
            <Ham_menu/>
        </>
    )
}

export default Home
