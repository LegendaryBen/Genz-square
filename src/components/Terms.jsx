import React from 'react'

const Terms = ({val,change}) => {
    return (
        <div className='checkbox'>
            <div className="terms-container">
                <input type="checkbox" checked={val} onChange={(e)=>change(e.currentTarget.checked)}/>
                <div>
                    I agree to all terms and privacy policy
                </div>
            </div>
        </div>
    )
}

export default Terms
