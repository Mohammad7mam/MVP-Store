import React from "react";
// import img from "../assets/img/Products/xbox.png";
// import Swiper from "../components/swiper";
import one from "../assets/img/Products/1.webp";
import two from "../assets/img/Products/xbox.png";
import three from "../assets/img/Products/3.webp";

function ProuductSinglee() {
  return (
    <>
      <div className="ProuductSingle">
        <div className="ProuductSingle-main">
          <div className="ProuductSingle-shadow"></div>
          <div className="ProuductSingle-img">
            <img src={two} alt="PS5" />
          </div>
        </div>
        <div className="ProuductSingle-txt">
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

export default ProuductSinglee;

{
  /* <div className="ProuductSingle-main"><img src={two} alt="PS5" /></div>
        <div className="ProuductSingle-txt">
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
        </div> */
}
