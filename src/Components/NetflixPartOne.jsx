import React, { useState } from 'react'
import NetflixBtnPart from './NetflixBtnPart'

function NetflixPartOne() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function clickSign() {
        alert(email + password)
    }
    return (
        <div className='mid-session' >
            <input onChange={(e) => { setEmail(e.target.value) }} type="email" name='email' className='input1' placeholder='Enter your email' /> <br />
            <input onChange={(e) => { setPassword(e.target.value) }} type="password" name='password' className='input2' placeholder='Enter your strong password' />
            <p className='para' >New to Netflix? <a href="#">Sign up now</a></p>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw-G8FXjZjHJwjEmFxaShQTI9IXtiKaRLOAdYc7Sf&s" className='netflix' width={100} alt="" /> */}
            <div>

                <div className='button-container' >
                    <button onClick={clickSign} className='btn' >SIGNUP</button>
                </div>
                <div className='paras'>
                    <p className='para' >This page is protected by Google reCAPTCHA <br /> to ensure you're not a bot. <a href="#"> Learn more.</a></p>
                </div>
            </div>
        </div>
    )
}

export default NetflixPartOne