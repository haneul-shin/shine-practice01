// 이렇게 해도 괜찮은 것인지...

import React from 'react'
import './HeroSection.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

function HeroSection(props) {

  if(props.id=='hero-home'){
    return (
      <div className='hero-container' id={props.id}>
        <h1>GET READY WITH US !</h1>
          <div className="hero-btns">
            <Link className="hero-btn-link" to='/products'>
              <Button buttonStyle='btn--outline' buttonSize='btn--large'>New Arrivals</Button>
            </Link>
            <Link className="hero-btn-link" to='/products'>
              <Button buttonStyle='btn--primary' buttonSize='btn--large'>Best Sellers</Button>
            </Link>
          </div>
    </div>
  )}
  else if(props.id=='hero-products'){
    return (
      <div className='hero-container' id={props.id}>
        <h1>ALL PRODUCTS</h1>
      </div>
    )
  }
  else if(props.id=='hero-stores'){
    return (
      <div className='hero-container' id={props.id}>
        <h1>FIND A LOCATION NEAR YOU</h1>
      </div>
    )
  }
  else if(props.id=='hero-services'){
    return (
      <div className='hero-container' id={props.id}>
        <h1>MAY I HELP YOU ?</h1>
      </div>
    )
  }
  else{
    return(<></>);
  }
}

export default HeroSection
