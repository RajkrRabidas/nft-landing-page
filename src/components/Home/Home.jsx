import React from "react";
import "./Home.css";
import Image1 from "/images/image1.png"; // Ensure the image path is correct

const Home = () => {
  return (
    <section class="hero">
      <div class="hero-left">
        <div>
          <h1>Discover, Collect and Sell Dope Art and NFTS</h1>
          <p class="hero-p">
            The world's largest digital marketplace for crypto collections and
            non fungible tokens (NFTs)
          </p>
          <div class="hero-butttons">
            <div class="buttons">
                <button class="btn-2">Register</button>
                <span class="gradient-border">
              <button class="btn-1">Create</button>
            </span>
            </div>
            <div class="watch-btn">
              <i class="ri-video-on-fill"></i>
              <a href="#">Watch a video</a>
            </div>
          </div>

          <div class="box">
            <div class="box1">
              <h3>27k</h3><span>+</span>
              <p>Art works</p>
            </div>
            <div class="box1">
              <h3>20k</h3><span>+</span>
              <p>Auctions</p>
            </div>
            <div class="box1">
              <h3>7k</h3><span>+</span>
              <p>Artists</p>
            </div>
          </div>

          <div class="user-stats">
            <div class="avatars">
              <img
                src="data:image/jpeg;base64,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"
                alt="user"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="user"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="user"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="user"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user"
              />
            </div>
            <div class="stats-text">
              <h3>40k+</h3>
              <p>Active Users</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-right">
        <div class="image-box">
          <img src={Image1} class="hero-image" alt="Image" />
          <div className="image-details">
            <div className="image-details-box">
              <p>Ending in :</p>
              <h3>1h 20m 30s</h3>
              <button className="btn1">place a Bid</button>
            </div>
            <div className="image-details-box">
               <p>Highest Bid</p>
              <h3>34.4 ETH</h3>
              <button className="btn2">Purchase</button>
            </div>
          </div>
        </div>
      </div>
      <div className="glowing2"></div>
    </section>
  );
};

export default Home;
