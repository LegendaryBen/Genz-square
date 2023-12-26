import React,{useState,useLayoutEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/header'
import Category from '../components/categories'
import Search_cards from '../components/Search-cards'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import Error from '../components/Error'
import Loader from '../components/Loader'
import axios from 'axios'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'
import { useDispatch,useSelector } from 'react-redux'
import { fetchSearch } from '../Redux/features/search/searchSlice'
import Fetch_empty from '../components/Fetch_empty'
import Fetch_loader from '../components/Fetch_loader'
import Fectch_error from '../components/Fectch_error'
import useResetSlide from '../custom hooks/useResetSlide'




const Search = (props) => {


    const[errors,setErrors] = useState("-150%");
    const[errorstate,setErrorstate] = useState("#00C24E");
    const[letter,setLetter]= useState('');
    const[load,setLoad]=useState(false);
    const[message,setMessage]=useState('');

    const dispatch = useDispatch();
    let error = useSelector(state=>state.search.error);
    let loading = useSelector(state=>state.search.loading);
    let data = useSelector(state=>state.search.data);
   
    const{id} = useParams();


    useLayoutEffect(()=>{
        dispatch(fetchSearch(id));
    },[])

    useResetSlide()


    const[currentPage,setCurrentPage] = useState(1);
    const[postPerPage,setPostPerPage] = useState(40);

    const lastPosIndex = currentPage * postPerPage;
    const firstPosIndex = lastPosIndex - postPerPage ;
    const currentarr = data.slice(firstPosIndex,lastPosIndex);
    



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



    if(loading == true){
        return (
            <Fetch_loader/>
        )
    }else if(error == true){

        return (
            <Fectch_error/>
        )

    }else if(loading == false && error == false && data.length == 0){

        return (
            <Fetch_empty/>
        )

    }else{

        return (
            <>
               {/* <Header/>
               <Category margin="margin"/> */}
               <div className='searches'>
                    {
                        currentarr.map((item,i)=>{
                            return  <Search_cards key={i} info={item}/>
                        })
                    }
               </div>
                <Pagination total={data} perpage={postPerPage} update={setCurrentPage} trace={currentPage}/>
                <Footer click={news} change={setLetter} value={letter}/>
                <Search_Bar/>
                <Ham_menu/>
                <Error color={errorstate} top={errors} message={message} click={setErrors}/>
                {load&&<Loader/>}
            </>
        )

    }
    

}

export default Search
