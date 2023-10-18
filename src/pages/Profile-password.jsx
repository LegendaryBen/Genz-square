import React from 'react'
import Profile_headers from '../components/Profile-headers'
import Profile_inputs from '../components/Profile-inputs'
import Save_changes from '../components/Save-changes'
import Submit_btn from '../components/Submit-btn'


const Profile_image = () => {
    return (
        <>
            <Profile_headers span1='Password' span2='Manage password settings for your account'/>
            <Profile_inputs label='Current Password' placeholder='Enter your password'/>
            <Profile_inputs label='New Password' placeholder='Enter your password'/>
            <Save_changes/>
            <Submit_btn text="Save Changes"/>
        </>
    )
}

export default Profile_image
