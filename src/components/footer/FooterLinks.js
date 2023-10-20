import React from 'react'
import './FooterLinks.scss'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {logo} from '../header/Header'

const FooterLinks = () => {
  return (
    <>
      <section className='contact-section'>
       <div className='container contact'>
        <div className='contact-icon'>
         <FaFacebookF className='i'/>
         <FaTwitter className='i'/>
         <FaInstagram className='i'/>
         <FaYoutube className='i'/>
        </div>
        <h2>Let's Talk</h2>
        <a href='#' className='btn btn-dark'>Make an Enquiry!</a>
       </div>
      </section>

      <section className='footer-section'>
       <div className='container footer'>
        <div className='footer-logo'>
         {logo}
        </div>

        <div className='footer-menu'>
         <p className='link-heading'>Feature</p>
         <ul className='nav-ul footer-links'>
          <li><a href="#">Link Shortening</a></li>
          <li><a href="#">Branded Links</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Blog</a></li>
         </ul>
        </div>
        <div className='footer-menu'>
         <p className='link-heading'>Resouces</p>
         <ul className='nav-ul footer-links'>
          <li><a href="#">Link Shortening</a></li>
          <li><a href="#">Branded Links</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Blog</a></li>
         </ul>
        </div>
        <div className='footer-menu'>
         <p className='link-heading'>Company</p>
         <ul className='nav-ul footer-links'>
          <li><a href="#">Link Shortening</a></li>
          <li><a href="#">Branded Links</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Blog</a></li>
         </ul>
        </div>
        <div className='footer-menu'>
         <p className='link-heading'>Partner</p>
         <ul className='nav-ul footer-links'>
          <li><a href="#">Link Shortening</a></li>
          <li><a href="#">Branded Links</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Blog</a></li>
         </ul>
        </div>
       </div>
      </section>
    </>
  )
}

export default FooterLinks
