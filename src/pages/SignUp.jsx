import React, {useState,useContext} from 'react'
import Arrow from '../components/Arrow'
import fancy from '../images/logfancy.jpg'
import genz from '../images/gen-z.svg'
import Googlebtn from '../components/Googlebtn'
import User_inputs_style from '../components/User-inputs-style'
import Inputs from '../components/Inputs'
import Terms from '../components/Terms'
import Submit from '../components/Submit'
import Sign_in from '../components/Sign-in'
import Loader from '../components/Loader'
import  {User} from '../contexts/Auth'
import {Navigate} from 'react-router-dom'
import axios from 'axios';
import useLogin from '../custom hooks/useLogin'


const SignUp = () => {

    const{setLogin} = useContext(User);
    let login = localStorage.getItem("gen-z") || '';

    useLogin(setLogin);

    const[loading,setLoading] = useState(false);
    const[warning,setWarning] = useState(false);
    const[message,setMessage] = useState("")
    const[color,setColor] = useState('');
   
    // form
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[term,setTerm] = useState(false);

    const submitForm = ()=>{
        
        if(name==''||email==''||password==''|| term == false){
            setColor("red")
            setMessage("Check your inputs properly, and accept the terms and condition");
            setWarning(true);
        }else{
            setLoading(true)

            axios.post("https://gen-zsquare.com/api/user",{
                name,
                email,
                password,
                term
            }).then(response=>{
                setColor("green")
                setMessage(response.data.message);
                setWarning(true);
                setLoading(false)
                setName('')
                setEmail('')
                setPassword('')
                setTerm(false)

            }).catch(error=>{

                if(error.message == 'Network Error'){
                    setColor("red")
                    setMessage(error.message);
                    setWarning(true);
                    setLoading(false)
                }else{
                    setColor("red")
                    setMessage(error.response.data.email.join(''));
                    setWarning(true);
                    setLoading(false)
                }
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
                        Create your account
                    </div>
                    <div className="getStarted">
                        Let's get started with your 7days free trial
                    </div>
                   <Googlebtn text='signup_with'/>
                   <User_inputs_style/>
                   <Inputs label="Name" placeholder="Enter your name" val={name} change={setName}/>
                   <Inputs label="Email" placeholder="Enter your email" val={email} change={setEmail}/>
                   <Inputs label="Password" placeholder="Enter your password" val={password} change={setPassword}/>
                   <Terms val={term} change={setTerm}/>
                   <Submit text='Sign Up' change={submitForm}/>
                   <Sign_in text='Log In' suggest='Already have an account?' to='/login' />
                </div>
            </div>
            <div className="userStyle">
                <Arrow image={fancy}/>
            </div>
            {loading && <Loader/>}
        </div>
    )
}

export default SignUp
