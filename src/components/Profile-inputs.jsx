import React from 'react'

const Profile_inputs = ({label,placeholder}) => {
    return (
        <div className='profile-inputs'>
            <label>{label} <span>*</span></label><br/>
            <input type="text" name="" id="" placeholder={placeholder}/>
        </div>
    )
}

export default Profile_inputs
