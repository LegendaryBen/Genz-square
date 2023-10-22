import React from 'react'
import Header from '../components/header'
import Arrow from '../components/Arrow'
import good from '../images/good.svg'
import Pay_btn from '../components/Pay-btn'
import Search_Bar from '../components/Search-Bar'
import Ham_menu from '../components/Ham-menu'

const Payment_success = () => {
    return (
        <>
            <Header/>
            <div className="notice-div">
                <div className="paybox">
                    <div className="pay-img">
                        <Arrow image={good}/>
                    </div>
                    <div className="pay-header">
                        Payment Successful
                    </div>
                    <div className="pay-info">
                        Your payment was successful, you will receive your magazine in your library
                        shortly
                    </div>
                    <Pay_btn col="#0BA348" text="Home" cls="pay-btn" text_col="#FFFFFF"/>
                </div>
            </div>
            <Search_Bar/>
            <Ham_menu/>
        </>
    )
}

export default Payment_success
