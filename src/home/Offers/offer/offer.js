import React from "react";
import '../Offers.css';
const Offer = ({ priceForCreator, text, btn }) => {
  return (
    <div>
      <h4 className="mb-4">Creator</h4>
      <h2 className="text-dark mb-3">
        ${priceForCreator}
        <small className="small">/month</small>
      </h2>
      <p className="text-muted">{text}</p>
      <button type="button" className="btn backgroundBtn text-light rounded-pill mb-3 py-1 py-md-2 px-1 px-md-3 fs-6">
        {btn}
      </button>
    </div>
  );
};

export default Offer;
