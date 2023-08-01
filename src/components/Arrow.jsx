import React from 'react'

const Arrow = ({image,cls,act}) => {
    return (
        <>
            <img src={image} className = {`${!cls?'':cls}`} onClick={()=>{
                if(act){
                    act();
                }else{
                    return;
                }
            }}/>
        </>
    )
}

export default Arrow
