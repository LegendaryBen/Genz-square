import React from 'react'
import Header from '../components/header'
import Arrow from '../components/Arrow'
import bad from '../images/bad.svg'
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
                        <Arrow image={bad}/>
                    </div>
                    <div className="pay-header">
                        Payment Failed
                    </div>
                    <div className="pay-info">
                        An error occured during payment processing, please go back and try again
                    </div>
                    <Pay_btn col="transparent" text="Home" cls="pay-btn" text_col="black" bor="1px solid grey"/>
                </div>
            </div>
            <Search_Bar/>
            <Ham_menu/>
        </>
    )
}

export default Payment_success
