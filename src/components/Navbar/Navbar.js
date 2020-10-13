// 1. 로그인/회원가입을 네비게이션 메뉴로
// 2. 마이페이지, 장바구니 아이콘 링크
// 3. 검색 기능 추가

import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { BiX, BiMenu, BiSpa, BiCart, BiSearch, BiUser, BiServer } from "react-icons/bi";
import { Button } from '../Button/Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 768) {
        setButton(false)
    } else {
        setButton(true)
    }
}

useEffect(() => {
    showButton();
},[]);

window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <BiSpa className='navbar-icon' />CSMTS
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-links" onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to='/stores' className="nav-links" onClick={closeMobileMenu}>Stores</Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to='sign-up' className="btn-link">
                  <Button buttonStyle='btn--main'>Sign Up</Button>
                </Link>
              ) : (
                <Link to='sign-up' className="btn-link">
                  <Button buttonStyle='btn--main' buttonSize='btn--large' onClick={closeMobileMenu}>Sign Up</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
