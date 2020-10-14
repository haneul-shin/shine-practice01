import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards_Skin() {
  return (
    <div className="cards-container">
      <div className="cards-wrapper">
          <h2 className='item-header'>Skin Care</h2>
          <ul className="cards-items">        
            <CardItem
              src='img/products/skin/oil-01.jpg'
              name='Marula Face Oil'
              price='$39.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/cream-01.jpg'
              name='Whitening Face Cream'
              price='$49.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/cream-02.jpg'
              name='Vitamin Face Cream'
              price='$49.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/cream-03.jpg'
              name='Nutrient Face Cream'
              price='$49.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/mask-01.jpg'
              name='AC Mask Pack'
              price='$9.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/mask-02.jpg'
              name='Vitamin Mask Pack'
              price='$9.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/mask-03.jpg'
              name='Sensitive Mask Pack'
              price='$9.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/mask-04.jpg'
              name='Hyaluron Mask Pack'
              price='$9.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/mist-01.jpg'
              name='AC Mist'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/mist-02.jpg'
              name='Vitamin Mist'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/mist-03.jpg'
              name='Sensitive Mist'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/skin/mist-04.jpg'
              name='Hyaluron Mist'
              price='$29.99'
              path='/products'/>
          </ul>
        </div>
        </div>
  )
}

export default Cards_Skin
