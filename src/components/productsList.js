import React from "react";
import ProductItem from "./Proudcts/ProductItem";

function ProductsList() {
  return (
    <div className="Products">
<div className="container">
        <div className="heading">
        <h2>Products</h2>
      </div>

      <div className="buttons">
        <button className="fancy-btn">Controlers</button>
        <button className="fancy-btn">Controlers</button>
        <button className="fancy-btn">Controlers</button>
        <button className="fancy-btn">Controlers</button>
      </div>

    </div>
<div className="ProductsList">
<ProductItem/>
<ProductItem/>
<ProductItem/>
<ProductItem/>


</div>
</div>
  );
}

export default ProductsList;
