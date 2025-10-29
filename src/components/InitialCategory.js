import React from "react";
import One from "../assets/svg/1"; 
import Two from "../assets/svg/2"; 
import Three from "../assets/svg/3"; 
import Four from "../assets/svg/4"; 
import Five from "../assets/svg/5"; 

function InitialCategory() {
  return (
<div class="container">
  <a href="#link1" class="component">
    <One/>
    <span>controllers</span>
  </a>

  <a href="#link2" class="component">
    <Two/>
    <span>Accessories</span>
  </a>

  <a href="#link3" class="component">
    <Three/>
    <span>Digital Cards</span>
  </a>

  <a href="#link4" class="component">
    <Four/>
    <span>Games</span>
  </a>

  <a href="#link5" class="component">
    <Five/>
    <span>T-shirt</span>
  </a>
</div>
  );
}

export default InitialCategory;
