import React from "react";
import Ps5 from "../assets/img/PS5.png";
import PC from "../assets/img/PC.png";
import Xbox from "../assets/img/xbox.png";
import Nintendo from "../assets/img/nintendo switch.png";

function InitialCategory() {
  return (
    <div className="mm">
      <div className="main-category">
        <div className="grid-category">
          <div className="box Xbox">
            <div className="left-content Xbox-content">
              <h2>XBox</h2>
              <button className="shop-btn ">Shop Now</button>
            </div>
            <div className="right-image Xbox-image">
              <img src={Xbox} alt="Xbox" />
            </div>
          </div>
          <div className="box Ps5">
            <div className="left-content Ps5-content">
              <h2 style={{ fontSize: "24px" }}>PlayStation</h2>
              <button className="shop-btn">Shop Now</button>
            </div>
            <div className="right-image Ps5-image ">
              <img src={Ps5} alt="PS5" />
            </div>
          </div>

          <div className="box PC">
            <div className="left-content PC-content">
              <h2>PC Gaming</h2>
              <button className="shop-btn">Shop Now</button>
            </div>

            <div className="right-image PC-image">
              <img src={PC} alt="PC" />
            </div>
          </div>
          <div className="box Nintendo">
            <div className="left-content Nintendo-content">
              <h2>Nintendo switch</h2>
              <button className="shop-btn">Shop Now</button>
            </div>

            <div className="right-image Nintendo-image">
              <img src={Nintendo} alt="Nintendo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialCategory;
