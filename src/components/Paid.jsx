import React from 'react'

const Paid = ({paid}) => {

    return paid == true ? (<div className='owned'>Subscribed</div>):(<div className='unpaid'>Unpaid</div>)
        
    
}

export default Paid
