import React from 'react'
import Story_buttons from './Story-buttons'
import { useSelector,useDispatch } from 'react-redux'
import { update } from '../Redux/features/topicStory/topicStorySlice'





const Stories_button_container = () => {

   let all = useSelector(state=>state.topicstory.all);

   let dispatch = useDispatch();

   function changeStory(cate){

      let clone = [...all].filter((item)=>{
         if(item.category == cate){
            return item
         }
      })

      if(clone.length == 0){

         dispatch(update([]));

      }else{

         let size = clone.length;
         let num = Math.floor(Math.random()*size);
         dispatch(update(clone[num]));

      }

   }



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
                    return <Story_buttons key={item.id} text={item.cat} change={changeStory} story={item.id}/>
                })
            }
        </div>
    )
}

export default Stories_button_container
