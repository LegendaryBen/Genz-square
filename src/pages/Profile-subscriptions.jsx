import React from 'react'
import Profile_headers from '../components/Profile-headers'
import Subscription_search from '../components/Subscription-search'
import Subcription_cards from '../components/Subcription-cards'


const Profile_subscriptions = (props) => {
    return (
        <div className='Profile-subscription'>
            <Profile_headers span1='Subscriptions' span2='View & Manage all subscription history for your account'/>
            <Subscription_search/>
            <Subcription_cards/>
            <Subcription_cards/>
            <Subcription_cards/>
            <Subcription_cards/>
            <Subcription_cards/>
            <Subcription_cards/>
        </div>
    )
}

export default Profile_subscriptions
