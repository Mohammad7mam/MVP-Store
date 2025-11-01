import React from "react";
import Xbox from "../../assets/svg/Xbox";
import Cart from "../../assets/svg/cart";
import img from "../../assets/img/Products/xbox.png";

function ProductItem() {
  return (
    <div className="ProductItem">
      {/* item 1 */}
      <div className="item1">
        <Xbox className="icon" />
        <div className="boxes">
          <div className="box1">30%</div>
          <div className="box2">NEW</div>
        </div>
      </div>

      {/* item 2 */}
      <div className="item2">
        <img src={img} alt="PS5" />
      </div>

      {/* item 3 */}
      <div className="item3">
        <h2>Xbox Wireless Controller – Carbon Black</h2>
      </div>

      {/* item 4 */}
      <div className="item4">
        <span className="left-text">$64.99</span>
        <span className="right-text">$64.99</span>
      </div>
      <div className="item5">
        <hr />
        <button className="btn">Add to cart</button>
      </div>
      {/* item 5 */}
      {/* <div className="item item5">
        <button>Add to cart<Cart/></button>
        
      </div> */}
    </div>
  );
}

export default ProductItem;
