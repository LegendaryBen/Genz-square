import React from 'react'
import Cat_options from './cat-options';

const Category = ({margin}) => {

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
        <div className={`${margin == ''? 'categories':'categories'+' '+margin}`}>
            <div className='cat-container'>
            {
                opt.map((item)=>{
                    return <Cat_options key={item.id} name={item.cat}/>
                })
            }
            </div>
        </div>
    )
}

export default Category;
