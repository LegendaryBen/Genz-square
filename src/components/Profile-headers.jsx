import React from 'react'

const Profile_headers = ({span1,span2}) => {
    return (
        <div className='Profile-headers'>
            <span>{span1}</span><br/>
            <span className='span'>{span2}</span>
        </div>
    )
}

export default Profile_headers
