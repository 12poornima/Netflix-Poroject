import React from 'react'
import NetflixBtnPart from './NetflixBtnPart'
import NetflixTitle from './NetflixTitle'

function NetflixPartOne() {
    return (
        <div className='container' >
            <NetflixTitle />
            <NetflixPartOne />
            <NetflixBtnPart />
            <div className="bg-img">
                <div className="content">
                    <form action="">
                        <div>
                            <input type="email" name='email' placeholder='Enter your email' /> <br />
                            <input type="password" name='password' placeholder='Enter your strong password' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NetflixPartOne