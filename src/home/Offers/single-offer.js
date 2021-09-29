import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Offer from "./offer/offer";
import "./Offers.css";
const SingleOffer = ({
  id,
  border,
  borderChild,
  borderShow,
  handleArrow,
  arrows,
  collapse,
  bootStrapCollapse,
}) => {
  const priceForCreator = useSelector((state) => state.priceForCreator);
  const [text1, setText1] = useState(
    `Seriously, totally free for up to 1,000 subscribers`
  );
  return (
    <div className={border + " col-md-4  p-0"}>
      <div className={borderShow + " text-light background"}>Recommend</div>
      <div className={borderChild + " p-3"}>
        <div>
          <img
            src="puzzle-col-1.png"
            alt="puzzel"
            width="50px"
            className="mb-3"
          />

          <Offer
            priceForCreator={priceForCreator}
            text={text1}
            btn="Request a demo"
          />
        </div>
        <a
          className="d-block d-md-none border-top text-decoration-none text-reset fs-6"
          data-bs-toggle="collapse"
          href={"#" + bootStrapCollapse}
          role="button"
          aria-expanded="false"
          aria-controls={bootStrapCollapse}
          onClick={() => handleArrow(id)}
        >
          See plan summary {arrows}
        </a>
        <div className={collapse + " transition"} id={bootStrapCollapse}>
          <p>text</p>
          <p>text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
