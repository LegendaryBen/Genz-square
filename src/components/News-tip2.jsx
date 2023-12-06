import React from 'react'
import { Link } from 'react-router-dom'
import box from "../images/box.jpg"
import Message2 from './Message2'
import { useSelector } from 'react-redux'
import Fetch_empty from './Fetch_empty'
import Fetch_loader from './Fetch_loader'
import Fectch_error from './Fectch_error'





const News_tip2 = () => {

    let error = useSelector(state=>state.fromMagazine.error);
    let loading = useSelector(state=>state.fromMagazine.loading);
    let  data = useSelector(state=>state.fromMagazine.data);


    if(loading == true){
        return(
            <Fetch_loader/>
        )
    }else if(error == true){

        return(
            <Fectch_error/>
        )

    }else if(loading == false && error == false && data.length == 0){

        return (
            <Fetch_empty/>
        )

    }else{

        return (
            <div className='News-container'>
                <div to="/" className='News-tip2'>
                    <div className='box-special1'>
                        <img src={data.image}  />
                    </div>
                    <Message2 data={data}/>
                </div>
            </div>
        )


    }


}

export default News_tip2
