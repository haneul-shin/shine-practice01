import React from 'react'
import { Link } from 'react-router-dom'
import './Service.css'

function CustomerService() {
  return (
    <div className='cs-container'>
      <section className="customer-section">
        <div className="customer-info">
          <h2 className='customer-header'>User</h2>
          <div className="link-wrapper">
          <Link className="customer-link" to='services'>Infomation</Link>
          <Link className="customer-link" to='services'>Security</Link>
          <Link className="customer-link" to='services'>Shopping Cart</Link>
          </div>
        </div>
        <div className="customer-delivery">
          <h2 className='customer-header'>Delivery</h2>
          <div className="link-wrapper">
          <Link className="customer-link" to='services'>My Order</Link>
          <Link className="customer-link" to='services'>Tracking</Link>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="service-faq">
          <h2 className='service-header'>FAQ</h2>
          <div className="link-wrapper">
          <Link className="service-link" to='services'>Product</Link>
          <Link className="service-link" to='services'>Return Policy</Link>
          <Link className="service-link" to='services'>Custom Order</Link>
          </div>
        </div>
        <div className="service-qna">
          <h2 className='service-header'>QNA</h2>
          <div className="link-wrapper">
          <Link className="service-link" to='services'>E-Mail</Link>
          <Link className="service-link" to='services'>ARS</Link>
          <Link className="service-link" to='services'>Live Chat</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerService
