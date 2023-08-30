import React from 'react'
import Arrow from './Arrow'
import img from '../images/Read-mag.jpg'
import linkedin from '../images/linkedin.svg'
import facebook from '../images/fb.svg'
import twitter from "../images/twitter.svg"
import whatsapp from "../images/whatsapp.svg"
import { Link } from 'react-router-dom'

const Read_Magazine = (props) => {
    return (
        <div className='Read-magazine'>
            <div className="Read-cat">
                Tech
            </div>
            <div className="Read-title">
                Meta to launch its Twitter clone Thursday as Elon Musk’s platform drives away users with 
                new limits and tech issues
            </div>
            <div className="Read-author">
                By Favsolomon
            </div>
            <div className="Read-date">
                July 4, 2023
            </div>
            <div className="Read-img">
                <Arrow image={img}/>
            </div>
            <div className="Read-socials">
                <div className="Image-by">
                    Image by GETTY IMAGES
                </div>
                <div className="Read-socials-icons">
                    <Link>
                        <Arrow image={linkedin}/>
                    </Link>
                    <Link>
                        <Arrow image={facebook}/>
                    </Link>
                    <Link>
                        <Arrow image={twitter}/>
                    </Link>
                    <Link>
                        <Arrow image={whatsapp}/>
                    </Link>
                    <Link>
                        Copy link
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Read_Magazine
