import React,{useContext} from 'react'
import Cancle from './Cancle'
import Mobile_search from './Mobile-search'
import Ham_sections from './Ham-sections'
import Products from './Products'
import Side_socials from './Side-socials'
import {Ham} from '../contexts/Hambar'

const Ham_menu = () => {

   const{slide} = useContext(Ham);

    const opt = [
        {
           id:0,
           cat:"Home"
        },
        {
           id:1,
           cat:"Magazine"
        },
        {
           id:2,
           cat:"Politics"
        },
        {
           id:3,
           cat:"Finance"
        },
        {
           id:4,
           cat:"Sports"
        },
        {
           id:5,
           cat:"Tech"
        },
        {
           id:6,
           cat:"Entertainment"
        },
        {
           id:7,
           cat:"Lifestyle"
        },
        {
           id:8,
           cat:"Real Estate"
        }
      ]
   

    return (
            <div className="sidebar" style={{left:!slide?"-100%":"0%"}}>
               <Cancle/>
               <Mobile_search/>
               {
                 
                 opt.map((item)=>{
                    return <Ham_sections key={item.id} section={item.cat}/>
                })    
                
               }
               <Products name="Product" product1='Gen-Z Square Magazine' product2='Webinars' product3='Podcast '/>
               <Products name="Company" product1='About Us' product2='Careers' product3='Contact'/>
               <Side_socials/>
               <div className="social-msg">
                    Copyright © 2023 Gen-Z Square, LLC All rights reserved.
                    Gen-Z Square® and its related marks are registered trademarks of Gen-Z Square LLC
               </div>
            </div>
    )
}

export default Ham_menu
