import React from 'react'
import Slides from './Slide'
import { useSelector } from 'react-redux'
import Fectch_error from './Fectch_error'
import Fetch_loader from './Fetch_loader'

const News_slides = () => {

    let data = useSelector((state)=> state.slider.data);
    let loading = useSelector(state=>state.slider.loading);
    let error = useSelector(state=>state.slider.error);


    if(loading == true){

        return <Fetch_loader/>

    }else if(error == true){

        return <Fectch_error/>

    }else{

        return (
            <div className='News-slides'>
                {
                    data.map((item)=>  <Slides data={item} key={item.id} />)
                }
            </div> 
        )

    }

}

export default News_slides
