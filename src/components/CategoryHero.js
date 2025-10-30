import React from "react";
import img from "../assets/img/Products/xbox.png";
import Swiper from "../components/swiper";


function CategoryHero() {
  return (
    <>
      <div className="rig-box">
        <div className="rig-content">
          <h2>Xbox Wireless Controller – Carbon Black</h2>
          <p>Xbox Wireless Controller – Carbon Black</p>
          <div className="rig-buttons">
            <button className="btn primary">view more</button>
            <button className="btn secondary">Add to cart</button>
          </div>
        </div>
        <div className="rig-image">
          <img src={img} alt="sample" />
        </div>

  
      </div>
          <Swiper/>
    </>
  );
}

export default CategoryHero;
