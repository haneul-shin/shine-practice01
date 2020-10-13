// 1. 카테고리별 페이지
// 2. 상품별 상세페이지

import React from 'react'
import Cards_Eye from './Cards_Eye'
import Cards_Face from './Cards_Face'
import Cards_Lip from './Cards_Lip'
import Cards_Skin from './Cards_Skin'
import Cards_Others from './Cards_Others'

function Cards() {
  return (
    <div className='cards'>
      <div className="cards-container">
        <Cards_Eye />
        <Cards_Face />
        <Cards_Lip />
        <Cards_Skin />
        <Cards_Others />
      </div>
    </div>
  )
}

export default Cards
