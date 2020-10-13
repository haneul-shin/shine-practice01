import React from 'react'
import './LoginForm.css'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <>
      <div className="login-container">
        <h1 className='login-header'>Log In</h1>
        <div className="check-member">
          <p className='check-p'>Not A Member Yet?</p>
          <Link to='/sign-up' className='signup-link'>Register Now</Link>
        </div>
        <div className="login-input-container">
          <form className='login-input-wapper'>
            <label className='login-label'>E-Mail</label>
            <input className='login-input' type="text" aria-required='true'/>
          </form>
          <form className='login-input-wapper'>
            <label className='login-label'>Password</label>
            <input className='login-input' type="text" aria-required='true'/>
          </form>
        </div>
        <div className="login-register">
          <Button buttonStyle='btn--dark' buttonSize='btn--medium'>Log In</Button>
        </div>
      </div>
    </>
  )
}

export default LoginForm
