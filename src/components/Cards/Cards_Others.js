import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards_Others() {
  return (
    <div className="cards wrapper">
          <h2 className='item-header'>Others</h2>
          <ul className="cards-items">
            <CardItem
              src='img/products/others/others-01.jpg'
              name='Makeup Mirror'
              price='$9.99'
              path='/products'/>
            <CardItem
              src='img/products/others/others-02.jpg'
              name='Gift Bag'
              price='$4.99'
              path='/products'/>
          </ul>
        </div>
  )
}

export default Cards_Others
