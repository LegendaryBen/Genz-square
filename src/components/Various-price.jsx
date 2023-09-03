import React from 'react'
import { Link } from 'react-router-dom'

const Various_price = () => {
    return (
        <div className="various-prices">
            <div className="plans">
                MONTHLY
            </div>
            <div className="trial-price">
                $1
            </div>
            <div className="first-year">
                Per month first year
            </div>
            <div className="other-years">
                Then $20.99 per month
            </div>
            <div className="start-trial">
                <Link>
                    Start my 1 month trial
                </Link>
            </div>
            <div className="other-years">
                Billed annually at $129.99
            </div>
            <div className="other-years">
                Renews at $220
            </div>
            <div className="other-years">
                Cancel anytime
            </div>
        </div>
    )
}

export default Various_price
