import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import arc from '../images/arc.svg'

const Navogations = () => {

    const[drop,setDrop] = useState(false);

    return (
        <>
            <div className='navigations'>
                <div style={{height:!drop?"auto":"60px",transition:"0.5s"}}>
                    <img src={arc} alt="" onClick={()=>{setDrop(!drop)}}/>
                    <NavLink to=''>Profile</NavLink><br/>
                    <NavLink to='image' className='nav-special'>Password</NavLink>
                    <NavLink to='email'className='nav-special' >Email Notifications</NavLink>
                    <NavLink to='subscriptions' className='nav-special'>Subscriptions</NavLink>
                    <NavLink  className='nav-special'>Log out</NavLink>
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
