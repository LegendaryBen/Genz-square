import React from 'react'
import Subscribed_cards from './Subscribed-cards'
import Elon from '../images/Elon.jpg'

const Owned_magazines = ({show}) => {
    return (
        <div className='Owned-magazines'>
            <Subscribed_cards image={Elon} paid={true} show={show}/>
            <Subscribed_cards image={Elon} paid={true} show={show}/>
            <Subscribed_cards image={Elon} paid={true} show={show}/>
            <Subscribed_cards image={Elon} paid={true} show={show}/>
            <Subscribed_cards image={Elon} paid={true} show={show}/>
            <Subscribed_cards image={Elon} paid={true} show={show}/>
            <Subscribed_cards image={Elon} paid={true} show={show}/>
        </div>
    )
}

export default Owned_magazines
