import React from 'react'
import Story_buttons from './Story-buttons'

const Stories_button_container = () => {
    const opt = [
        {
           id:0,
           cat:"Entertainment"
        },
        {
           id:1,
           cat:"Magazine"
        },
        {
           id:2,
           cat:"Technology"
        },
        {
           id:3,
           cat:"Politics"
        },
        {
           id:4,
           cat:"Finance"
        },
        {
           id:5,
           cat:"Sports"
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
        <div className='Stories-button-container'>
             {
                opt.map((item)=>{
                    return <Story_buttons key={item.id} text={item.cat}/>
                })
            }
        </div>
    )
}

export default Stories_button_container
