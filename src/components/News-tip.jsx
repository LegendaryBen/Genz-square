import React from 'react'
import mack from "../images/mack.jpg"
import Message from './Message'
import { Link } from 'react-router-dom'
import Fetch_loader from './Fetch_loader'
import { useSelector } from 'react-redux'



const News_tip = () => {

    let error = useSelector(state=>state.landingpage.error);
    let data = useSelector(state=>state.landingpage.data);
    let loading = useSelector(state=>state.landingpage.loading);


    if(loading == true){
        return (
            <Fetch_loader/>
        )
    }else if(error == true){

        return (
            <div className='News-container'>
                <Link to="" className='News-tip'>
                    <div className='box box-special'>
                        <img src={mack} alt="" />
                    </div>
                    <Message/>
                </Link>
            </div>
        )
    }else{

        return (
            <div className='News-container'>
                <Link to="" className='News-tip'>
                    <div className='box box-special'>
                        <img src={mack} alt="" />
                    </div>
                    <Message/>
                </Link>
            </div>
        )

    }




}

export default News_tip
