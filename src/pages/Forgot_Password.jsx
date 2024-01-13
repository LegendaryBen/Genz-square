import React from 'react'
import Forgot_header from '../components/Forgot_header'
import Forgot_email from '../components/Forgot_email'
import Forgot_code from '../components/Forgot_code'
import Forgot_new from '../components/Forgot_new'





const Forgot_Password = (props) => {
    return (
        <div className='forgot-password'>
            <Forgot_header/>
            <div className="forgot-body">
                {/* <Forgot_email/> */}
                {/* <Forgot_code/> */}
                <Forgot_new/>
            </div>
        </div>
    )
}

export default Forgot_Password
