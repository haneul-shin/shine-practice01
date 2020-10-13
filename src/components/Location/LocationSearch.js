// 1. 지도 추가 - 구글맵?
// 2. 검색 결과 보이기

import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './LocationSearch.css'

function LocationSearch() {
  return (
    <>
      <div className="ls-container">
        <section className="ls-search">
          <p className='ls-p'>Search and Find the nearest store!</p>
          <div className="input-area">
            <form>
              <input className="ls-input" name='location' type="text"  placeholder="Enter your location"/>
              <Link className='ls-input-btn' to='/'>
              <Button buttonStyle='btn--primary' buttonSize='btn--medium'>Search</Button>
              </Link>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default LocationSearch
