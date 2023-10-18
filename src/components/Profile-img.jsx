import React from 'react'
import Arrow from './Arrow'
import chim from '../images/chim.jpg';
import btn from '../images/upload-btn.jpg'

const Profile_img = () => {
    return (
            <div className="show-images">
                <Arrow image={chim} cls='user-img'/>
                <div className='upload-btn'>
                    <div className='upload-details'>
                        <span className='upload-detail-header'>Profile Picture</span><br/><br/>
                        <span>We support PNGs, JPEGs and GIFs under 10MB</span>
                    </div>
                    <div className='hide-file-btn'>
                        <Arrow image={btn}/>
                        <input type="file" name="" id="" />
                    </div>
                   
                </div>
            </div>
    )
}

export default Profile_img
