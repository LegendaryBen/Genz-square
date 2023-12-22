import React,{useState} from 'react'
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




const Search = (props) => {


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



    return (
        <>
           <Header/>
           <Category margin="margin"/>
           <div className='searches'>
                <Search_cards/>
                <Search_cards/>
           </div>
            <Pagination/>
            <Footer click={news} change={setLetter} value={letter}/>
            <Search_Bar/>
            <Ham_menu/>
            <Error color={errorstate} top={errors} message={message} click={setErrors}/>
            {load&&<Loader/>}
        </>
    )
}

export default Search
