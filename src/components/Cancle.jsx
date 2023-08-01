import React,{useContext} from 'react'
import Arrow from './Arrow'
import cancle from '../images/cancle1.svg'
import {Link} from 'react-router-dom'
import { Ham } from '../contexts/Hambar';


const Cancle = () => {

    const{slideIn} = useContext(Ham);

    return (
        <div className="cancle">
            <Arrow image={cancle} act={slideIn}/>
            <div className="mobile-genz">
                GEN-Z SQUARE
            </div>
            <Link to="/">
                SUBSCRIBE
            </Link>
        </div>
    )
}

export default Cancle
