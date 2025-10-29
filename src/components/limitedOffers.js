import React from "react";
import Xbox from "../assets/img/Products/xbox.png"; // تأكد من المسار الصحيح


function limitedOffers() {
  return (
    <div className="custom-container">
      {/* القسم الأول */}
      <div className="section section-1">
        <h2 >Limited Time offers</h2>
        <p >Xbox Wireless Controller – Carbon Black</p>
      </div>

      {/* القسم الثاني */}
      <div className="section section-2">
        {[1, 2, 3].map((item, index) => (
          <React.Fragment key={index}>
            <div className="item">
              <div className="left">
                <img
                  src={Xbox}
                  alt={`صورة ${item}`}
                />
                <span>Xbox Wireless Controller {item}</span>
              </div>
              <div className="right">
                <p className="one">Original price: $64.99</p>
                <p className="two">Now Only: $64.99</p>
              </div>
            </div>

            {index < 2 && <div className="divider"></div>}
           
          </React.Fragment>
        ))}
      </div>

      {/* القسم الثالث */}
      <div className="section section-3">
        <button>Shop All Discounts</button>
      </div>
    </div>
  );
}

export default limitedOffers;
