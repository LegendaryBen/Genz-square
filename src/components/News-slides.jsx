import React,{useContext,useEffect} from 'react'
import Slides from './Slide'
import { useSelector } from 'react-redux'
import Fectch_error from './Fectch_error'
import Fetch_loader from './Fetch_loader'
import Fetch_empty from './Fetch_empty'
import { User } from '../contexts/Auth'

const News_slides = () => {

    let data = useSelector((state)=> state.slider.data);
    let loading = useSelector(state=>state.slider.loading);
    let error = useSelector(state=>state.slider.error);

    const{parent,setSlideWidth}= useContext(User);

    useEffect(()=>{

        if(parent.current?.children[0]){
            setSlideWidth(parent.current.children[0].clientWidth);
        }

    },[parent.current?.children])


    if(loading == true){

        return <Fetch_loader/>

    }else if(error == true){

        return <Fectch_error/>

    }else if( loading == false && error == false && data.length == 0){

        return <Fetch_empty/>

    }else{

        return (
            <div className='News-slides' ref={parent}>
                {
                    data.map((item)=>  <Slides data={item} key={item.id} />)
                }
            </div> 
        )

    }
    

}

export default News_slides
