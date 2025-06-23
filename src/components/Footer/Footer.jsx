import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">

        <div className="footer-left">
          <h2 className="logo">
            PLAY <span className="nft">NFT</span>
          </h2>
          <p>
            The World's Largest Digital Marketplace for crypto collections<br />
            and non-fungible tokens (NFTs). Buy, sell and discover<br />
            exclusive digital assets.
          </p>
          <div className="social-icons">
            <li><i class="ri-twitter-x-fill"></i></li>
            <li><i class="ri-instagram-line"></i></li>
            <li><i class="ri-facebook-circle-fill"></i></li>
            <li><i class="ri-discord-fill"></i></li>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>Art</li>
              <li>Photography</li>
              <li>Music</li>
              <li>Games</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>My Account</h4>
            <ul>
              <li>My Profile</li>
              <li>My Collections</li>
              <li>My Favorites</li>
              <li>My Account Settings</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Help Center</li>
              <li>Partners</li>
              <li>Suggestions</li>
              <li>Newsletters</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Ranking</li>
              <li>Activity</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
