import React from 'react'
import { NavLink } from 'react-router-dom'
import Arrow from './Arrow'
import arc from '../images/arc.svg'

const Navogations = () => {
    return (
        <>
            <div className='navigations'>
                <div>
                    <Arrow image={arc} />
                    <NavLink to=''>Profile</NavLink><br/>
                    <NavLink to='image' className='nav-special'>Password</NavLink>
                    <NavLink to='email'className='nav-special' >Email Notifications</NavLink>
                    <NavLink to='subscriptions' className='nav-special'>Subscriptions</NavLink>
                    <NavLink  className='nav-special hide-delete'>Delete Account</NavLink>
                </div>
                <NavLink className='delete'>
                    Delete account
                </NavLink>
            </div>
        </>
        
    )
}

export default Navogations
