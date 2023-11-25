import React from 'react'

const Submit = ({text,change}) => {
    return (
        <div className='submit'>
            <div className="button" onClick={change}>
                {text}
            </div>
        </div>
    )
}

export default Submit
