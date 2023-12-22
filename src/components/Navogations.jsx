import {useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import arc from '../images/arc.svg'
import  {User} from '../contexts/Auth'



const Navogations = ({clean}) => {

    const[drop,setDrop] = useState(false);
    const{login,setLogin,setDetails,details} = useContext(User);

    const logOut = ()=>{
        localStorage.removeItem('gen-z');
        window.location.reload();
    }

    return (
        <>
            <div className='navigations'>
                <div style={{height:!drop?"auto":"60px",transition:"0.5s"}}>
                    <img src={arc} alt="" onClick={()=>{setDrop(!drop)}}/>
                    <NavLink to=''>Profile</NavLink><br/>
                    <NavLink to='image' className='nav-special'>Password</NavLink>
                    <NavLink to='email'className='nav-special' >Email Notifications</NavLink>
                    <NavLink to='subscriptions' className='nav-special'>Subscriptions</NavLink>
                    <NavLink  className='nav-special' onClick={logOut}>Log out</NavLink>
                    <NavLink  className='nav-special hide-delete' onClick={()=>clean(true)} >Delete Account</NavLink>
                </div>
                <NavLink className='delete' onClick={()=>{clean(true)}}>
                    Delete account
                </NavLink>
            </div>
        </>
        
    )
}

export default Navogations
