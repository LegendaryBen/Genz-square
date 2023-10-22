import React from 'react'
import Header from '../components/header'
import Payment_input from '../components/payment-input'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'


const payment_details = (props) => {
    return (
        <>
            <Header/>
            <div className="payment-details-container">
                <div className="payment-box">
                    <div className="payment-box-header">
                        Payment details
                    </div>
                    <div className="payment-box-info">
                        Please ensure to fill the correct information below
                    </div>
                    <Payment_input label="Email" placeholder="Enter your email"/>
                    <Payment_input label="Password" placeholder="Enter your password"/>
                    <Payment_input label="Phone Number" placeholder="Enter your number"/>
                    <div className='payment-sumbit'>
                        Proceed
                    </div>
                </div>
            </div>
            <Search_Bar/>
            <Ham_menu/>
        </>
    )
}

export default payment_details
