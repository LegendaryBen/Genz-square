import {useEffect,useState} from 'react'
import { useParams,Navigate } from 'react-router-dom'
import Header from '../components/header'
import Category from '../components/categories'
import Read_Magazine from '../components/Read-Magazine'
import Show_full_story from '../components/Show-full-story'
import Footer from '../components/Footer'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'
import { useSelector,useDispatch } from 'react-redux'
import { fetchTrending } from '../Redux/features/trending/trendingSlice'
import Fetch_empty from '../components/Fetch_empty'
import Fetch_loader from '../components/Fetch_loader'
import Fectch_error from '../components/Fectch_error'
import Error from '../components/Error'
import Loader from '../components/Loader'
import axios from 'axios'





const Trending = () => {

    const{id} = useParams();
    const dispatch = useDispatch();
    let loading = useSelector(state=>state.trending.loading);
    let error = useSelector(state=>state.trending.error);
    let data = useSelector(state=>state.trending.data);


    let usedata = data.filter((item)=>{
        return item.id == id;
    })

    let skip = usedata[0]?.id;
    let type = "trending"
    const regex = /[0-9]+/;

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



    useEffect(()=>{

        dispatch(fetchTrending());

    },[])


    if(loading == true){

        return <Fetch_loader/>

    }else if(error == true){

        return <Fectch_error/>

    }else if(loading == false && error == false && usedata.length == 0){

        return <Fetch_empty/>

    }else{

        return regex.test(id)? (
            <>
                <Header/>
                <Category margin="margin"/>
                <Read_Magazine data={usedata[0]}/>
                <Show_full_story text='Go back home' to='/' skip={skip} data={data} current={usedata[0]} type={type}/>
                <Footer click={news} change={setLetter} value={letter}/>
                <Search_Bar/>
                <Ham_menu/>
                <Error color={errorstate} top={errors} message={message} click={setErrors}/>
                {load&&<Loader/>}
            </>
        ):<Navigate to="/"/>

    }


}

export default Trending
