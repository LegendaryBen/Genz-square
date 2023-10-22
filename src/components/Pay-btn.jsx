import React from 'react'

const Pay_btn = ({col,text, cls,text_col,bor}) => {
    return (
        <div style={{backgroundColor:col,color:text_col,border:bor}} className={cls}>
            {text}
        </div>
    )
}

export default Pay_btn
