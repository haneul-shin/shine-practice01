import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards_Face() {
  return (
    <div className="cards-container">
      <div className="cards-wrapper">
    <h2 className='item-header'>Face Makeup</h2>
    <ul className="cards-items">
      <CardItem
        src='img/products/face/BB-01.jpg'
        name='Pefect Cover BB'
        price='$39.99'
        path='/products'/>
      <CardItem
        src='img/products/face/blush-01.jpg'
        name='Powder Blush'
        price='$34.99'
        path='/products'/>
      <CardItem
        src='img/products/face/blush-02.jpg'
        name='Pact Blush'
        price='$34.99'
        path='/products'/>
      <CardItem
        src='img/products/face/concealer-01.jpg'
        name='Pefect Cover Concealer'
        price='$24.99'
        path='/products'/>
      <CardItem
        src='img/products/face/cushion-01.jpg'
        name='Mint Cover Cushion'
        price='$44.99'
        path='/products'/>
      <CardItem
        src='img/products/face/cushion-02.jpg'
        name='Pink Cover Cushion'
        price='$44.99'
        path='/products'/>
      <CardItem
        src='img/products/face/cushion-03.jpg'
        name='Pefect Cover Cushion'
        price='$49.99'
        path='/products'/>
      <CardItem
        src='img/products/face/cushion-04.jpg'
        name='Black Cover Cushion'
        price='$39.99'
        path='/products'/>
      <CardItem
        src='img/products/face/foundation-01.jpg'
        name='Pefect Cover Foundation'
        price='$49.99'
        path='/products'/>
      <CardItem
        src='img/products/face/highlighter-01.jpg'
        name='Aura Pearl Highligher'
        price='$39.99'
        path='/products'/>
      <CardItem
        src='img/products/face/highlighter-02.jpg'
        name='Shining Highlighter'
        price='$34.99'
        path='/products'/>
      <CardItem
        src='img/products/face/powder-01.jpg'
        name='Cover Finish Powder'
        price='$39.99'
        path='/products'/>
    </ul>
  </div>
  </div>
  )
}

export default Cards_Face
