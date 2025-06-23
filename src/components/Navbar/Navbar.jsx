import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
        <h2>PLAY <span>NFT</span></h2>
        <nav className="navbar">
          <li>
            <span class="home"></span>
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Marketplace</a>
            <a href="#">Artists</a>
            <a href="#">News</a>
          </li>
        </nav>
        <div className="header-btn">
          <span className="gradient-border">
            <button className="btn-1"><i className="ri-search-line"></i> Search</button>
          </span>
          <button className="btn-2">Register</button>
        </div>
        <div className="menu-btn"><i className="ri-menu-3-line"></i></div>
      </header>
  )
}

export default Navbar
