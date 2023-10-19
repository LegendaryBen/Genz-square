import React from 'react'
import Profile_headers from '../components/Profile-headers'
import Submit_btn from '../components/Submit-btn'



const Profile_email = () => {
    return (
        <>
            <Profile_headers span1='Email Notifications' span2='Manage your email notifications for your account'/>
            <div className="alerts">
                <div>
                    Alert & Notifications
                </div>
                <div>
                    Toggle All
                </div>
            </div>
            <div className="send-to">
                <div className="send">
                    Send me:
                </div>
                <div className='check-container'>
                    <div>
                        <input type="checkbox" name="" id="" className='checkbox' />
                    </div>
                    <span>Gen-Z square subscription updates</span>
                </div>
                <div className='check-container'>
                    <div>
                        <input type="checkbox" name="" id="" className='checkbox' />
                    </div>
                    <span>Gen-Z square subscription updates</span>
                </div>
                <div className='check-container'>
                    <div>
                        <input type="checkbox" name="" id="" className='checkbox' />
                    </div>
                    <span>Gen-Z square subscription updates</span>
                </div>
            </div>
            <div className="alerts">
                <div>
                    Alert & Notifications
                </div>
                <div>
                    Toggle All
                </div>
            </div>
            <div className="send-to">
                <div className="send">
                    Send me:
                </div>
                <div className='check-container'>
                    <div>
                        <input type="checkbox" name="" id="" className='checkbox' />
                    </div>
                    <span>Gen-Z square subscription updates</span>
                </div>
                <div className='check-container'>
                    <div>
                        <input type="checkbox" name="" id="" className='checkbox' />
                    </div>
                    <span>Gen-Z square subscription updates</span>
                </div>
                <div className='check-container'>
                    <div>
                        <input type="checkbox" name="" id="" className='checkbox' />
                    </div>
                    <span>Gen-Z square subscription updates</span>
                </div>
            </div>
            <Submit_btn text="Save Changes"/>
        </>
    )
}

export default Profile_email
