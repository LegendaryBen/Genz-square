import React from 'react'
import {Link} from "react-router-dom"

const Not_Found = (props) => {
    return (
        <div className='not-found'>
            <div className="p">
                <div className="main-p">
                    404
                </div>
                <div className="page-n">
                    Page not found
                </div>
                <div className="back-home">
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>  
        </div>
    )
}

export default Not_Found
