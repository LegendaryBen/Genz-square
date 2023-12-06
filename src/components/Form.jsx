import React from 'react'
import Arrow from './Arrow'
import sub from '../images/sub-msg.svg'

const Form = ({value,change,click}) => {
    return (
        <form className='Subcribe-now'>
            <div className="subscribe-email">
                <Arrow image={sub} cls="sub-msg"/>
                <div className="subscribe-msg">
                    <input type="email" name="" id="" placeholder='Your Email' value={value} onChange={(e)=>change(e.target.value)}/>
                </div>                         
            </div>
            <input type="submit" value="SUBSCRIBE" className='submit' onClick={click}/>            
        </form>
    )
}

export default Form
