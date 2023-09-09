import React from 'react'


const Inputs = ({label,placeholder}) => {
    return (
        <div className='Inputs'>
            <div className="inputs-box">
                <div className="label">
                    {label} <span>*</span>  
                </div>
                <input type="text" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Inputs
