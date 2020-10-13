import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className="input-form">
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Enter Your Email'/>
            <Link to='sign-up'>
              <Button buttonStyle='btn--main' buttonSize='btn--medium'>Subscribe</Button>
            </Link>
          </form>
        </div>
      </section>
  
      <section className='footer-bottom'>
        <div className="footer-links">
          <Link className="footer-link-item" to='/'>terms</Link>
          <Link className="footer-link-item" to='/'>privacy</Link>
          <Link className="footer-link-item" to='/'>careers</Link>
          <Link className="footer-link-item" to='/'>site map</Link>
        </div>
        <div className='social-icons'>
          <Link className='social-icon-link' to={'//www.facebook.com'} target='_blank' aria-label='Facebook'><FaFacebook /></Link>
          <Link className='social-icon-link' to={'//www.instagram.com'} target='_blank' aria-label='Instagram'><FaInstagram /></Link>
          <Link className='social-icon-link' to={'//www.youtube.com'} target='_blank' aria-label='Youtube'><FaYoutube /></Link>
          <Link className='social-icon-link' to={'//www.twitter.com'} target='_blank' aria-label='Twitter'><FaTwitter /></Link>
          <Link className='social-icon-link' to={'//www.linkedin.com'} target='_blank' aria-label='LinkedIn'><FaLinkedin /></Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;