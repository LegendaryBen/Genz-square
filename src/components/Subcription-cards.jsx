import React from 'react'
import { Link } from 'react-router-dom'

const Subcription_cards = () => {
    return (
        <Link className='Subscription-cards'>
            <div className="card-title">
                GENZ  SQUARE  MAGAZINE
            </div>
            <div className="card-dates">
                <div className="start-date">Start Date: 19-01-2023</div>
                <div className="start-date end">End Date: 19-02-2023</div>
            </div>
        </Link>
    )
}

export default Subcription_cards
