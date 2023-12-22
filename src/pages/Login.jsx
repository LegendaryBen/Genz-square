import React, {useState,useContext,useEffect} from 'react'
import Arrow from '../components/Arrow'
import fancy from '../images/logfancy.jpg'
import genz from '../images/gen-z.svg'
import Googlebtn from '../components/Googlebtn'
import User_inputs_style from '../components/User-inputs-style'
import Inputs from '../components/Inputs'
import Submit from '../components/Submit'
import Sign_in from '../components/Sign-in'
import {Navigate,useNavigate} from 'react-router-dom'
import axios from 'axios';
import Loader from '../components/Loader'
import  {User} from '../contexts/Auth'
import useLogin from '../custom hooks/useLogin'
import { jwtDecode } from "jwt-decode";




const Login = () => {

    const{setLogin,setDetails,details} = useContext(User);
    let login = localStorage.getItem("gen-z") || '';

    const navigate = useNavigate();
    
    useLogin(setLogin);


    const[loading,setLoading] = useState(false);
    const[warning,setWarning] = useState(false);
    const[message,setMessage] = useState("")
    const[color,setColor] = useState("");


   
    // form
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');


    const submitForm = ()=>{
        
        if(email == "" || password == ""){

            setColor("red")
            setMessage("Check your inputs properly, and accept the terms and condition");
            setWarning(true);

        }else{
            setLoading(true)

            axios.post('https://gen-zsquare.com/api/token/',{
                email,password
            }).then(res=>{

                let data = jwtDecode(res.data.refresh).is_user

                if(data == true){
                    localStorage.setItem("gen-z",JSON.stringify(res.data));
                    setLoading(false)
                    window.location.reload();
                }else{
                    setColor("red")
                    setMessage("You are not a registered user");
                    setWarning(true);
                    setLoading(false);
                }
               

            }).catch(err=>{

                setColor("red")
                setMessage(err.response.data.detail);
                setWarning(true);
                setLoading(false)

            })

        }


    }




    return login !== '' ? <Navigate to="/"/>: (
        <div className='Login'>
            <div className="userInputs">
                <div className="loginfancy">
                    <Arrow image={genz}/>
                    <span>
                        GEN-Z SQUARE
                    </span>
                </div>
                <div className="userDetails">
                    {warning && <div className="Warning" style={{color:color}}>{message}</div>}
                    <div className="createAccount">
                        Log in your account
                    </div>
                    <div className="getStarted">
                        You’ve missed some interesting stories and topics!
                    </div>
                   <Googlebtn text='signin_with'/>
                   <User_inputs_style/>
                   <Inputs label="Email" placeholder="Enter your email"  val={email} change={setEmail}/>
                   <Inputs label="Password" placeholder="Enter your password" val={password} change={setPassword}/>
                   <Submit text='Log In' change={submitForm}/>
                   <Sign_in text='Sign Up' suggest='Don’t have an account?' to='/sign-up'/>
                </div>
            </div>
            <div className="userStyle">
                <Arrow image={fancy}/>
            </div>
            {loading && <Loader/>}
        </div>
    )
}

export default Login
