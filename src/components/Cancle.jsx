import React,{useContext} from 'react'
import Arrow from './Arrow'
import cancle from '../images/cancle1.svg'
import {Link} from 'react-router-dom'
import { Ham } from '../contexts/Hambar';
import { User } from '../contexts/Auth';

const Cancle = () => {

    const{slideIn} = useContext(Ham);

    const{login,setLogin} = useContext(User);

    return (
        <div className="cancle">
            <Arrow image={cancle} act={slideIn}/>
            <div className="mobile-genz">
                GEN-Z SQUARE
            </div>
            {!login && <Link to="/sign-up">
                SUBSCRIBE
            </Link>}
        </div>
    )
}

export default Cancle
