import React,{useContext,useEffect,useLayoutEffect,useState} from 'react'
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
import useResetSlide from '../custom hooks/useResetSlide'
import { fetchSlides } from '../Redux/features/slider/sliderSlice'
import { fetchStory } from '../Redux/features/topicStory/topicStorySlice'
import { fetchMagazine } from '../Redux/features/fromMagazine/fromMagazineSlice'
import Error from '../components/Error'
import Loader from '../components/Loader'
import axios from 'axios'






const Home = () => {

    const{login,setLogin} = useContext(User);

    let error = useSelector(state=>state.landingpage.error);

    let loading = useSelector(state=>state.landingpage.loading);

    let newsData = useSelector(state=>state.landingpage.data);

    let error2 = useSelector(state=>state.topicstory.error);

    let loading2 = useSelector(state=>state.topicstory.loading);

    let newsData2 = useSelector(state=>state.topicstory.data);

    useLogin(setLogin);

    useResetSlide();

    const dispatch = useDispatch();
    const[errors,setErrors] = useState("-150%");
    const[errorstate,setErrorstate] = useState("#00C24E");
    const[letter,setLetter]= useState('');
    const[load,setLoad]=useState(false);
    const[message,setMessage]=useState('');


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

                setErrorstate("#d30000");
                setMessage(res.response.data.email.join(''));
                setErrors("0%");
                setLoad(false);
                setTimeout(()=>{
                    setErrors("-150%");
                },4000)

            })
        }
    }


    useLayoutEffect(()=>{

        dispatch(fetchHomestory());
        dispatch(fetchSlides());
        dispatch(fetchStory());
        dispatch(fetchMagazine());

    },[])


    return (
        <>
            <Header/>
            <Category margin="margin"/>
            <News_tip data={newsData} error={error} loading={loading} image={newsData.image}/>
            <News_slides/>
            <Slides_controller/>
            <New_magazine/>
            <Magazine_cover/>
            <Stories/>
            <Stories_button_container/>
            <News_tip data={newsData2}  error={error2} loading={loading2} image={newsData2.image}/>
            <New_magazine2/>
            <News_tip2/>
            <Magazine_snippets_container/>
            <Footer click={news} change={setLetter} value={letter}/>
            <Search_Bar/>
            <Ham_menu/>
            <Error color={errorstate} top={errors} message={message} click={setErrors}/>
            {load&&<Loader/>}
        </>
    )
}

export default Home
