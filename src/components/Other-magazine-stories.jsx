import React from 'react'
import More_stories_card from './More-stories-card'

const Other_magazine_stories = ({cls,data,skip,type}) => {


    let skipdata;
    let main = [];
    
    if(skip == undefined){

        skipdata = [];

    }else{

        skipdata = data.filter((item)=>{
            if(item.id !== skip ){
                return item;
            }
        })

        let count = 0;


        while(count < 5 && skipdata.length !== 0){

            let num = Math.floor(Math.random()*skipdata.length)

            main.push(skipdata[num]);

            skipdata.splice(num,1);
            
            count++;

        }



    }


    return (
        <div className={`${cls ? cls : "Other-magazine-stories"}`}>
            <div className="more-stories-header">
                    More stories
            </div>
            {
                main.map((item,i)=><More_stories_card data={item} key={i} type={type}/>)
            }
            
        </div>
    )
}

export default Other_magazine_stories
