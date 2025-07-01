import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" />
          <p>Serving happiness on every plate — order your favorite food anytime, anywhere.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>HOME</li>
            <li>About Us</li>
            <li>Delievery</li>
            <li>Privary Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>
            GET IN TOUCH</h2>
          <ul>
            <li>Naveen Kr Shukla & GreatStack</li>
            <li>itsnaveenshukla@gmail.com</li>
          </ul>

        </div>

      </div>
      <hr />
      <p className="footer-copyright">
        We’re passionate about connecting food lovers with the best restaurants in town.

      </p>

    </div>
  )
}

export default Footer
