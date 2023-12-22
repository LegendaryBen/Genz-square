import React from 'react'

const Submit_btn = ({text,click}) => {
    return (
        <button className='save-btn' onClick={click}>{text}</button>
    )
}

export default Submit_btn
