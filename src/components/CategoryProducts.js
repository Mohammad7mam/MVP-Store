import React from "react";
import ProductItem from "./Proudcts/ProductItem";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';



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
