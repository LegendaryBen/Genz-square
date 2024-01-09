import React from 'react'

const ReadNotification = ({hide,body,title}) => {
    return (
        <div className='read-notification'>
            <div className="read-close">
                <span className="material-symbols-outlined" onClick={()=>{hide(false)}}>cancel</span>
            </div>
            <div className="read-topic">
                {title}
            </div>
            <div className="read-body">
                {body}
            </div>
        </div>
    )
}

export default ReadNotification
