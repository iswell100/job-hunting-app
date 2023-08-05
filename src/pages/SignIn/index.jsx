import React from 'react'

import './style.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return <div className='login-wrapper'>
    <div className='bg-login'>
      <img src="/images/login-bg.png" alt="/images/login-bg.png" />
    </div>
    <div className='form-wrapper'>
      <div className='form-wrapper-inner'>
        <h2>Welcome Back, Dude</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className='form-field'>
            <label htmlFor="email">Email</label>
            <input type='text' id='email' className='input-custom2' placeholder='Enter email address' {...register("email", { required: true })} />
            {errors.email && (
              <span className="hint-error">
                Email is required
              </span>
            )}
          </div>
          <div className='form-field'>
            <label htmlFor="password">Email</label>
            <input type='password' id='password' className='input-custom2' placeholder='Enter password address' {...register("password", { required: true })} />
            {errors.password && (
              <span className="hint-error">
                Password is required
              </span>
            )}

          </div>
          <Button htmlType='submit' className='button-custom' type='primary'>
            Sign In
          </Button>
          <div className='info-text'>
            Don’t have an account?
            <Link className='link' to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  
}
