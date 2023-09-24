import React from 'react'
import Arrow from '../components/Arrow'
import fancy from '../images/logfancy.jpg'
import genz from '../images/gen-z.svg'
import Googlebtn from '../components/Googlebtn'
import User_inputs_style from '../components/User-inputs-style'
import Inputs from '../components/Inputs'
import Submit from '../components/Submit'
import Sign_in from '../components/Sign-in'


const Login = () => {
    return (
        <div className='Login'>
            <div className="userInputs">
                <div className="loginfancy">
                    <Arrow image={genz}/>
                    <span>
                        GEN-Z SQUARE
                    </span>
                </div>
                <div className="userDetails">
                    <div className="Warning">
                        Incorrect blah blah blah!... abeg how person go forget en login details
                    </div>
                    <div className="createAccount">
                        Log in your account
                    </div>
                    <div className="getStarted">
                        You’ve missed some interesting stories and topics!
                    </div>
                   <Googlebtn text='signin_with'/>
                   <User_inputs_style/>
                   <Inputs label="Email" placeholder="Enter your email"/>
                   <Inputs label="Password" placeholder="Enter your password"/>
                   <Submit text='Log In'/>
                   <Sign_in text='Sign Up' suggest='Don’t have an account?' to='/sign-up'/>
                </div>
            </div>
            <div className="userStyle">
                <Arrow image={fancy}/>
            </div>
        </div>
    )
}

export default Login
