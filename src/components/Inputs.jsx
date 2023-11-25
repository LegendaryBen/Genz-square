import React from 'react'


const Inputs = ({label,placeholder,val,change}) => {
    return (
        <div className='Inputs'>
            <div className="inputs-box">
                <div className="label">
                    {label} <span>*</span>  
                </div>
                <input type="text" placeholder={placeholder} value={val} onChange={(e)=>{change(e.target.value)}}/>
            </div>
        </div>
    )
}

export default Inputs
