import React from 'react'
import mack from "../images/mack.jpg"
import Message from './Message'
import { Link } from 'react-router-dom'
import Fetch_loader from './Fetch_loader'
import Fectch_error from './Fectch_error'
import { useSelector } from 'react-redux'



const News_tip = ({data}) => {

    let error = useSelector(state=>state.landingpage.error);
    let loading = useSelector(state=>state.landingpage.loading);
    let image = data.image;


    if(loading == true){
        return (
            <Fetch_loader/>
        )
    }else if(error == true){

        return (
            <Fectch_error/>
        )

    }else{

        return (
            <div className='News-container'>
                <Link to="" className='News-tip'>
                    <div className='box box-special'>
                         <img src={mack} alt="" />
                    </div>
                    <Message data={data}/>
                </Link>
            </div>
        )

    }




}

export default News_tip
