import {useRef} from 'react'
import Arrow from './Arrow'
import btn from '../images/upload-btn.jpg'
import user from '../images/user-icon.svg'



const Profile_img = ({image,change}) => {

    const pointer = useRef(null);



    return (
            <div className="show-images">
                <Arrow image={image==null?user:image} cls='user-img'/>
                <div className='upload-btn'>
                    <div className='upload-details'>
                        <span className='upload-detail-header'>Profile Picture</span><br/><br/>
                        <span>We support PNGs, JPEGs and GIFs under 10MB</span>
                    </div>
                    <div className='hide-file-btn'>
                        <img src={btn} alt="" onClick={()=>{
                            pointer.current.click()
                        }}/>
                        <input type="file" name="" id=""  ref={pointer} style={{display:"none"}} onChange={change}/>
                    </div>
                   
                </div>
            </div>
    )
}

export default Profile_img
