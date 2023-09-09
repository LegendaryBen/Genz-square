import React from 'react'
import Arrow from '../components/Arrow'
import fancy from '../images/logfancy.jpg'
import genz from '../images/gen-z.svg'
import Googlebtn from '../components/Googlebtn'
import User_inputs_style from '../components/User-inputs-style'
import Inputs from '../components/Inputs'
import Terms from '../components/Terms'
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
                        Create your account
                    </div>
                    <div className="getStarted">
                        Let's get started with your 7days free trial
                    </div>
                   <Googlebtn/>
                   <User_inputs_style/>
                   <Inputs label="Name" placeholder="Enter your name"/>
                   <Inputs label="Email" placeholder="Enter your email"/>
                   <Inputs label="Password" placeholder="Enter your password"/>
                   <Terms/>
                   <Submit/>
                   <Sign_in/>
                </div>
            </div>
            <div className="userStyle">
                <Arrow image={fancy}/>
            </div>
        </div>
    )
}

export default Login
