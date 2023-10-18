import React from 'react'
import Profile_headers from '../components/Profile-headers'
import Profile_img from '../components/Profile-img'
import Profile_inputs from '../components/Profile-inputs'
import Save_changes from '../components/Save-changes'
import Submit_btn from '../components/Submit-btn'

const Profile_password = () => {
    return (
        <>
            <Profile_headers span1='Profile' span2='Manage profile settings for your account'/>
            <Profile_img/>
            <Profile_inputs label='Name' placeholder='Enter your name'/>
            <Profile_inputs label='Email' placeholder='Enter your email'/>
            <Save_changes/>
            <Submit_btn text="Save Changes"/>
        </>
       
    )
}

export default Profile_password
