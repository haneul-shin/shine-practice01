import React from 'react'
import './SignForm.css'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function SignForm() {
  return (
    <>
      <div className="signform-container">
        <h1 className='signform-header'>Sign Up</h1>
        <div className="check-member">
          <p className="check-p">Already A CSMTS Member?</p>
          <Link to='/log-in' className='login-link'>Log in Now</Link>
        </div>
        <div className="signform-input-container">
          <form className='signform-input-wapper'>
            <label className='signform-label'>First Name</label>
            <input className='signform-input' type="text" aria-required='true'/>
          </form>
          <form className='signform-input-wapper'>
            <label className='signform-label'>E-Mail</label>
            <input className='signform-input' type="text" aria-required='true'/>
          </form>
          <form className='signform-input-wapper'>
            <label className='signform-label'>Password</label>
            <input className='signform-input' type="text" aria-required='true'/>
          </form>
          <form className='signform-input-wapper'>
            <label className='signform-label'>Birthday</label>
            <select name="birth_mm" id="birth_mm">
            <option value="">Month</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
            <select name="birth_dd" id="birth_dd">
            <option value="">Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </form>
        </div>
        <div className="signform-register">
          <Button buttonStyle='btn--dark' buttonSize='btn--medium'>Register</Button>
        </div>
      </div>
    </>
  )
}

export default SignForm
