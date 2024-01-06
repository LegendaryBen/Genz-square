import React,{useContext} from 'react'
import Arrow from './Arrow'
import arrowleft from "../images/arrowleft.svg"
import arrowright from "../images/arrowright.svg"
import { User} from '../contexts/Auth'



const Slides_controller = () => {


    const{moveSlide} = useContext(User);


    return (
        <div className='arrow-parent-container'>
            <div className='arrow-container' >
                <img src={arrowleft} alt="" onClick={()=>{
                    moveSlide("back")
                }}/>
                <img src={arrowright} alt="" onClick={()=>{
                    moveSlide("front")
                }}/>
            </div>
        </div>
    )
}

export default Slides_controller
