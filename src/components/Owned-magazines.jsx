import React from 'react'
import Subscribed_cards from './Subscribed-cards'
import Elon from '../images/Elon.jpg'

const Owned_magazines = () => {
    return (
        <div className='Owned-magazines'>
            <Subscribed_cards image={Elon} paid={true}/>
            <Subscribed_cards image={Elon} paid={true}/>
            <Subscribed_cards image={Elon} paid={true}/>
            <Subscribed_cards image={Elon} paid={true}/>
            <Subscribed_cards image={Elon} paid={true}/>
            <Subscribed_cards image={Elon} paid={true}/>
            <Subscribed_cards image={Elon} paid={true}/>
        </div>
    )
}

export default Owned_magazines
