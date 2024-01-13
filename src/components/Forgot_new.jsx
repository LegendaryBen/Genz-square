import React from 'react'

const Forgot_new = (props) => {
    return (
        <div className='forgot-input-container'>
            <div className="password-reset">
                Change Password
            </div>
            <div className="forgot-input">
                <label>New Password<span>*</span></label><br/>
                <input type="email" name="" id="" placeholder=' Enter your email'/>
            </div>
            <div className="forgot-input">
                <label>Re-type New Password<span>*</span></label><br/>
                <input type="email" name="" id="" placeholder=' Enter your email'/>
            </div>
            <div className="forgot-submit">
                <input type="submit" value="Save Password"/>
            </div>
        </div>
    )
}

export default Forgot_new
