import React,{useContext} from 'react'
import Arrow from './Arrow'
import Paid from './Paid'
import badge from '../images/tag.svg'
import {Link} from 'react-router-dom'
import dot from '../images/dot.svg'
import time from '../images/time.svg'
import {Ham} from '../contexts/Hambar'

const Subscribed_cards = ({image ,paid}) => {

    const{slideIn} = useContext(Ham);


    return (
        <Link className='subscribed-cards' to='/' onClick={slideIn}>
            <div className='subscribed-cards-image'>
                <Arrow image={image}/>
            </div>
            <div className='subscribed-cards-info'>
                <div className='subscribed-cards-info1'>
                    <div className="info1-title">
                        <div className='info1-title1'>
                            <span>Tech</span>
                            <Paid paid={paid}/>
                        </div>
                    </div>
                    <Arrow image={badge}/>   
                </div>

                <div className='subscribed-cards-info2'>
                    <div className='subscribed-cards-info2-first'>
                        The World Business Tycoon
                    </div>
                    <div className='subscribed-cards-info2-second'>
                        Elon Musk
                    </div>
                </div>
                <div className='subscribed-cards-info3'>
                    <div className='subscribed-cards-info3-first'>
                        <Arrow image={time}/>
                        <span>1hr 30mins Read</span>
                    </div>
                    <div className='subscribed-cards-info3-first'>
                        <Arrow image={dot}/>
                        <span>Issued: Feb 2024</span>
                    </div> 
                </div>
            </div>
        </Link>
    )
}

export default Subscribed_cards
