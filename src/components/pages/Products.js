import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeroSection from '../HeroSection/HeroSection';
import CardNav from '../Cards/CardNav'
import Cards_Eye from '../Cards/Cards_Eye'
import Cards_Face from '../Cards/Cards_Face'
import Cards_Lip from '../Cards/Cards_Lip'
import Cards_Skin from '../Cards/Cards_Skin'
import Cards_Others from '../Cards/Cards_Others'

function Products() {
  return (
    <>
      <HeroSection id='hero-products' />
      <CardNav />

      {/* 있으나 없으나 작동되는 이유 무엇...?  */}
      {/* <Switch> */}
        <Route exact path="/products">
          <Cards_Eye />
          <Cards_Face />
          <Cards_Lip />
          <Cards_Skin />
          <Cards_Others />
        </Route>

        {/* 왜 이미지가 안 뜨는 걸까 ? */}
        <Route path="/products/eye" component={Cards_Eye}/>
        <Route path="/products/face" component={Cards_Face}/>
        <Route path="/products/lip" component={Cards_Lip}/>
        <Route path="/products/skin" component={Cards_Skin}/>
        <Route path="/products/others" component={Cards_Others}/>
        {/* </Switch> */}
    </>
  )
}

export default Products
