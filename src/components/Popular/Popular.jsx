import React, { useState } from "react";
import "./Popular.css";
import image2 from "../../../public/images/image-2.webp";
import image3 from "../../../public/images/image-3.jpg";
import image4 from "../../../public/images/image4.webp";
import image5 from "../../../public/images/image5.webp";
import image6 from "../../../public/images/image6.webp";

const nftData = [
  {
    title: "El Costa",
    artist: "Darius Vong",
    price: "1.75 ETH",
    likes: "39k",
    image: image3,
  },
  {
    title: "VERSACE",
    artist: "Antoni Tudisco",
    price: "2.45 ETH",
    likes: "48k",
    image: image2,
  },
  {
    title: "Digital Decade",
    artist: "Anthony Gargasz",
    price: "2.45 ETH",
    likes: "50k",
    image: image6,
  },
  {
    title: "Winter Jamz",
    artist: "Antoni Tudisco",
    price: "2.3 ETH",
    likes: "47k",
    image: image4,
  },
  {
    title: "Pastel Wifey",
    artist: "Blake Kathryn",
    price: "2.1 ETH",
    likes: "45k",
    image: image5,
  },
];

const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? nftData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === nftData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <h2>Popular this week</h2>
        <div className="silde-box">
          <div className="glowing3"></div>
          <div className="box1">
            <div className="info">
              <div className="text">
                <h4>digital costa</h4>
                <p>by Darius Yong</p>
              </div>
              <div className="buttons">
                <button>1.75 ETH</button>
                <p><i class="ri-heart-fill"></i> 48K</p>
              </div>
            </div>
            <img src={image2} alt="" />
          </div>
          <div className="box1">
            <div className="info">
              <div className="text">
                 <h4>VERSACE</h4>
                <p>by Antoni Tudisco</p>
              </div>
              <div className="buttons">
                <button>1.75 ETH</button>
                <p><i class="ri-heart-fill"></i> 48K</p>
              </div>
            </div>
            <img src={image3} alt="" />
          </div>
          <div className="box1 active">
            <div className="info">
              <div className="text">
                <h4>Digital Decade</h4>
                <p>by Anthony gargasz</p>
              </div>
              <div className="buttons">
                <button>1.75 ETH</button>
                <p><i class="ri-heart-fill"></i> 48K</p>
              </div>
            </div>
            <img src={image4} alt="" />
          </div>
          <div className="box1">
            <div className="info">
              <div className="text">
                <h4>Winter Jamz</h4>
                <p>by Antoni Tudisco</p>
              </div>
              <div className="buttons">
                <button>1.75 ETH</button>
                <p><i class="ri-heart-fill"></i> 48K</p>
              </div>
            </div>
            <img src={image5} alt="" />
          </div>
          <div className="box1">
            <div className="info">
              <div className="text">
                <h4>Pastel Wifey</h4>
                <p>by blake kathryn</p>
              </div>
              <div className="buttons">
                <button>1.75 ETH</button>
                <p><i class="ri-heart-fill"></i> 48K</p>
              </div>
            </div>
            <img src={image6} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Popular;
