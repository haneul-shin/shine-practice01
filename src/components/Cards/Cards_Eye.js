import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards_Eye() {
  return (
    <div className="cards-container">
      <div className="cards-wrapper">
        <h2 className='item-header'>Eye Makeup</h2>
        <ul className="cards-items">
          <CardItem
            src='img/products/eye/eyebrow-01.jpg'
            name='Waterproof Eyebrow'
            price='$29.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/eyeliner-01.jpg'
            name='Waterproof Eyeliner'
            price='$29.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/eyeliner-02.jpg'
            name='Sweatproof Eyeliner'
            price='$29.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/mascara-01.jpg'
            name='Waterproof Mascara'
            price='$29.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/shadow-01.jpg'
            name='Pink Shadow'
            price='$39.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/shadow-02.jpg'
            name='Pearl Shadow'
            price='$39.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/shadow-03.jpg'
            name='Matt Shadow'
            price='$39.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/shadow-04.jpg'
            name='Glitter Single Shadow'
            price='$29.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/shadow-05.jpg'
            name='Palette Shadow Pack'
            price='$99.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/shadow-06.jpg'
            name='Flowery Shadow'
            price='$39.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/shadow-07.jpg'
            name='Pink Starry Stick'
            price='$29.99'
            path='/products'/>
          <CardItem
            src='img/products/eye/shadow-08.jpg'
            name='Gold Starry Stick'
            price='$29.99'
            path='/products'/>
        </ul>
      </div>
    </div>
  )
}

export default Cards_Eye
