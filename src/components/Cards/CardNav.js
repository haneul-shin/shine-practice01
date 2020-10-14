// 1. 카테고리별 페이지
// 2. 상품별 상세페이지

import React from 'react'
import { Link } from 'react-router-dom'
import './CardNav.css'

function CardNav() {

  return (
      <div className="cardnav-container">
        <div className="cardnav-wrapper">
          <h2 className="cardnav-header">Category</h2>
          <ul className="cardnav-category">
            <li className="cardnav-item">
              <Link className='cardnav-link' to='/products'>All</Link>
            </li>
            <li className="cardnav-item">
              <Link className='cardnav-link' to='/products/eye'>Eye</Link>
            </li>
            <li className="cardnav-item">
              <Link className='cardnav-link' to='/products/face'>Face</Link>
            </li>
            <li className="cardnav-item">
              <Link className='cardnav-link' to='/products/lip'>Lip</Link>
            </li>
            <li className="cardnav-item">
              <Link className='cardnav-link' to='/products/skin'>Skin</Link>
            </li>
            <li className="cardnav-item">
              <Link className='cardnav-link' to='/products/others'>Others</Link>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default CardNav
