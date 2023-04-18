import React from 'react'
import './Newsletter.css'
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <div className='newsletterContainer'>
            <h1>Newsletter</h1>
            <div className='desc'>Get timely updates from your favorite products.</div>
            <div className='inputContainer'>
                <input type='text' placeholder='Your e-mail' />
                <div className='btn'>
                    <SendIcon/>
                </div>
            </div>
        </div>
    )
}

export default Newsletter