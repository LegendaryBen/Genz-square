import React from 'react'

const Profile_inputs = ({label,placeholder,change,val}) => {
    return (
        <div className='profile-inputs'>
            <label>{label} <span>*</span></label><br/>
            <input type="text" value={val} id="" placeholder={placeholder} onChange={(e)=>{change(e.target.value)}}/>
        </div>
    )
}

export default Profile_inputs
