import React from "react";
import img from "../assets/img/Products/xbox.png";

function CategoryHero() {
  return (
    <>
      <div className="rig-box">
        <div className="rig-content">
          <h2>Xbox Wireless Controller – Carbon Black</h2>
          <p>Xbox Wireless Controller – Carbon Black</p>
          <div className="rig-buttons">
            <button className="btn primary">Home</button>
            <button className="btn secondary">Home</button>
          </div>
        </div>

        <div className="rig-image">
          <img src={img} alt="sample" />
        </div>
      </div>
      <div className="gallery">
        <div className="item">
          <img src="https://via.placeholder.com/80" alt="img1" />
          <p className="caption">النص 1</p>
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/80" alt="img2" />
          <p className="caption">النص 2</p>
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/80" alt="img3" />
          <p className="caption">النص 3</p>
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/80" alt="img4" />
          <p className="caption">النص 4</p>
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/80" alt="img5" />
          <p className="caption">النص 5</p>
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/80" alt="img6" />
          <p className="caption">النص 6</p>
        </div>
      </div>
    </>
  );
}

export default CategoryHero;
