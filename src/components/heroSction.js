import React from "react";
import HeroImg from "../assets/img/HeroImg.png"; // تأكد من المسار الصحيح
function heroSction() {
  return (
    <section class="hero">
      <img src={HeroImg} alt="hero image" className="hero-img" />
      <div class="hero-content">
        <h1 class="hero-title">Be the MVP of Your Game</h1>
        <p class="hero-text">
          Shop the latest consoles, pro accessories, and top-tier gaming gear
          built for champions.
        </p>
        <button class="hero-btn">Shop Now</button>
      </div>
    </section>
  );
}

export default heroSction;
