import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({name,details1,details2,details3}) => {
    return (
        <div className='details'>
            <div className="name">
                {name} 
            </div>
            <div className="podcast">
                <Link className='podcast1'>
                    {details1}
                </Link>
            </div>
            <div className="podcast">
                <Link className='podcast1'>
                    {details2} 
                </Link>
            </div>
            <div className="podcast">
                <Link className='podcast1'>
                    {details3}
                </Link>
            </div> 
        </div>
    )
}

export default Details
