import React from 'react'
import Magazine_snippets from './Magazine-snippets'

const Magazine_snippets_container = () => {
    return (
        <div className='Magazine-snippets-container'>
            <div className='snippets-container'>
                <Magazine_snippets/>
                <Magazine_snippets/>
                <Magazine_snippets/>
                <Magazine_snippets/>
            </div>
        </div>
    )
}

export default Magazine_snippets_container
