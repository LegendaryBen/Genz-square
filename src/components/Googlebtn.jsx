import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';



const Googlebtn = ({text}) => {

    return (
        <div className='google-container'>
            <div className='google'>
                <GoogleOAuthProvider clientId="hfvydfty">
                    <GoogleLogin text={text}logo_alignment="center" 
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed')
                            }}
                    /> 
                </GoogleOAuthProvider>
            </div>
             
        </div>
    )
}

export default Googlebtn
