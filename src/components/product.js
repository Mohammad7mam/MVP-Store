import React from "react";
// import img from "../assets/img/Products/xbox.png";
// import Swiper from "../components/swiper";
import one from "../assets/img/Products/1.webp"
import two from "../assets/img/Products/2.webp"
import three from "../assets/img/Products/3.webp"


function product() {
  return (
    <>
      <div className="product">
        <div className="product-images">
          <div className="img-box"> <img src={one} alt="PS5" /></div>
          <div className="img-box"><img src={two} alt="PS5" /></div>
          <div className="img-box"><img src={three} alt="PS5" /></div>
        </div>
        <div className="product-main"><img src={two} alt="PS5" /></div>
        <div className="product-txt">
          <h2>Xbox Wireless Controller – Carbon Black</h2>
          <p>$64.99</p>
          <div className="button-box">
             <div className="qty-contant">
              <p>QTY</p>
              <div className="qty-cart">
                <p>1</p>
                <div className="qty-add">
                  <button className="add">+</button>
                  <button className="dec">-</button>
                </div>
              </div>
            </div> 
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default product;
