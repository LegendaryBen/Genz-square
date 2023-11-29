import React from 'react'
import error from '../images/load-error.svg'

const Fectch_error = (props) => {
    return (
        <div className='fetch-error'>
            <img src={error} alt="" />
            <span>ERROR!</span>
        </div>
    )
}

export default Fectch_error
