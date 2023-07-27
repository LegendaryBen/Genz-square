import React from 'react'
import Form from './Form'
import Details from './Details'
import Socials from './Socials'
import linked from '../images/linkedin.svg'
import fb from '../images/fb.svg'
import twitter from '../images/twitter.svg'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='News-letter'>
                <div className="News-letter-one">
                    <div className="letter-topic">
                        Subscribe To Our Newsletter 
                    </div>
                    <div className="letter-info">
                        We'll be in your inbox every weekend with the weeks
                        magazine &<br/> other top business news,
                        inspiring stories, best advice and exclusive<br/>
                        reporting from GEN-Z SQUARE
                    </div>
                   <Form/>
                </div>
                <div className="News-letter-two">
                    <Details name='Product' details1='Gen-Z Square Magazine' details2='Webinars' details3='Podcast'/>
                    <Details name='Company' details1='About Us' details2='Careers' details3='Contact'/>
                </div>
            </div>
            <div className="socials">
                <div className="copyright">
                    Copyright © 2023 Gen-Z Square, LLC All rights reserved. Gen-Z Square® and its related marks
                    are registered trademarks of Gen-Z Square LLC
                </div>
                <div className="main-socials">
                    <Socials image={linked}/>
                    <Socials image={fb}/>
                    <Socials image={twitter}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
