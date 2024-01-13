import React from 'react'

const Forgot_email = (props) => {
    return (
        <div className='forgot-input-container'>
            <div className="password-reset">
                Forgot Password
            </div>
            <div className="forgot-input">
                <label>Email <span>*</span></label><br/>
                <input type="email" name="" id="" placeholder=' Enter your email'/>
            </div>
            <div className="forgot-submit">
                <input type="submit" value="Send code to email"/>
            </div>
        </div>
    )
}

export default Forgot_email
