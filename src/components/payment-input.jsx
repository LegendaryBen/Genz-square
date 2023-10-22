import React from 'react'

const Payment_input = ({label,placeholder}) => {
    return (
        <div className='payments-inputs'>
            <label>{label}</label><span> *</span><br/>
            <input type="text" name="" id="" placeholder={placeholder} />
        </div>
    )
}

export default Payment_input
