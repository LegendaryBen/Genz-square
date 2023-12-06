import React from 'react'
import mack from "../images/mack.jpg"
import Message from './Message'
import { Link } from 'react-router-dom'
import Fetch_loader from './Fetch_loader'
import Fectch_error from './Fectch_error'
import Fetch_empty from './Fetch_empty'
import { useSelector } from 'react-redux'



const News_tip = ({data,error,loading,image}) => {

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
            <div className='News-container'>
                <Link to={`/trending/${data.id}`} className='News-tip'>
                    <div className='box box-special'>
                         <img src={image} alt="" />
                    </div>
                    <Message data={data}/>
                </Link>
            </div>
        )

    }
    
    
   




}

export default News_tip
