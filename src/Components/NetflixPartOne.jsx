import React, { useState } from 'react'
import NetflixBtnPart from './NetflixBtnPart'

function NetflixPartOne() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function clickSign() {
        alert(email + password)
    }
    return (
        <div className='container' >

            <div className="bg-img">
                <div className="content">
                    <form action="">
                        <div>
                            <input onChange={(e) => { setEmail(e.target.value) }} type="email" name='email' placeholder='Enter your email' /> <br />
                            <input onChange={(e) => { setPassword(e.target.value) }} type="password" name='password' placeholder='Enter your strong password' />
                        </div>
                    </form>
                </div>

                <div className='btn-box' >
                    <div className='btn-card' >
                        <button onClick={clickSign} className='btn' >SIGNUP</button>
                        <p className='para' >New to Netflix? <a href="#">Sign up now</a></p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/480px-Netflix-new-icon.png" className='netflix' alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetflixPartOne