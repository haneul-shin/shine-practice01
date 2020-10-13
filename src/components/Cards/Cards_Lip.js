import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards_Lip() {
  return (
    <div className="cards wrapper">
          <h2 className='item-header'>Lip Makeup</h2>
          <ul className="cards-items">
            <CardItem
              src='img/products/lip/lipstick-01.jpg'
              name='Neon Tone Lipstick'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/lip/lipstick-02.jpg'
              name='Pink Tone Lipstick'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/lip/lipstick-03.jpg'
              name='Charms Lipstick'
              price='$34.99'
              path='/products'/>
            <CardItem
              src='img/products/lip/lipstick-04.jpg'
              name='Crayon Lipstick'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/lip/liptint-01.jpg'
              name='Glossy Lip Tint'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/lip/liptint-02.jpg'
              name='Velvet Lip Tint'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/lip/liptint-03.jpg'
              name='Matt Lip Tint'
              price='$29.99'
              path='/products'/>
            <CardItem
              src='img/products/lip/liptint-04.jpg'
              name='Plumping Lip Tint'
              price='$29.99'
              path='/products'/>                        
            <CardItem
              src='img/products/lip/liptint-05.jpg'
              name='Flowery Lip Tint'
              price='$29.99'
              path='/products'/>   
            <CardItem
              src='img/products/lip/liptint-06.jpg'
              name='oliy Lip Tint'
              price='$29.99'
              path='/products'/>  
            <CardItem
              src='img/products/lip/liptint-07.jpg'
              name='Matt Veley Lip Tint'
              price='$29.99'
              path='/products'/>     
            <CardItem
              src='img/products/lip/lipbalm-01.jpg'
              name='Lip N Hand Balm'
              price='$19.99'
              path='/products'/>  
          </ul>
        </div>
  )
}

export default Cards_Lip
