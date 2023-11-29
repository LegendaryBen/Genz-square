import Header from '../components/header'
import Payment_input from '../components/payment-input'


const Payment_details = (props) => {


    return (
        <>
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
        </>
    )
}

export default Payment_details
