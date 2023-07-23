import React from 'react'

const Arrow = ({image,cls}) => {
    return (
        <>
            <img src={image} className = {`${!cls?'':cls}`}/>
        </>
    )
}

export default Arrow
