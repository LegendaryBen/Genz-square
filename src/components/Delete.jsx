import React from 'react'
import Arrow from './Arrow'
import warn from '../images/delete-warn.svg'

const Delete = () => {
    return (
        <div className='delete-pop'>
            <div className='delete-div'>
                <div className="delete-img">
                    <Arrow image={warn}/>
                </div>
                <div className="delete-text">
                    Delete Account
                </div>
                <div className="delete-info">
                    Are you sure you want to deactivtae your account? All of your data will be<br/><br/>
                    permanently removed from our servers forever. This action cannot be undone
                </div>
                <div className="delete-btns">
                    <div className="delete-red">
                        Delete
                    </div>
                    <div className="delete-white">
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete
