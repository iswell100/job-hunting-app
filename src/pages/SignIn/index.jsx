import React from 'react'

import './style.css'

export default function SignIn() {
  return <div className='login-wrapper'>
    <div className='bg-login'>
      <img src="/images/login-bg.png" alt="/images/login-bg.png" />
    </div>
    <div className='form-wrapper'>
      <div className='form-wrapper-inner'>
        <h2>Welcome Back, Dude</h2>
        <form action="">
          <div className='form-field'>
            <label htmlFor="email">Email</label>
            <input type='text' id='email' placeholder='Enter email address' />
          </div>
        </form>
      </div>
    </div>
  </div>
  
}
