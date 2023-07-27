import React from 'react'
import Arrow from './Arrow'
import sub from '../images/sub-msg.svg'

const Form = () => {
    return (
        <form className='Subcribe-now'>
            <div className="subscribe-email">
                <Arrow image={sub} cls="sub-msg"/>
                <div className="subscribe-msg">
                    <input type="email" name="" id="" placeholder='Your Email'/>
                </div>                         
            </div>
            <input type="submit" value="SUBSCRIBE" className='submit' />            
        </form>
    )
}

export default Form
