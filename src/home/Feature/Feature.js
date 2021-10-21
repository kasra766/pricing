import React from "react";
import RowFeature from "./SingleFeature/rowFeature";
import Input from "../inputs/Input";
import Offer from "../Offers/offer/offer";
import data from "../../data.json";
import { useState } from "react";
import { useSelector } from "react-redux";

import "./Feature.css";

const Feature = () => {
  const priceForCreator = useSelector((state) => state.priceForCreator);

  ///////////////////////////state/////////////////////////////
  const [text1, setText1] = useState(
    `Seriously, totally free for up to 1,000 subscribers`
  );
  const [allState, setState] = useState({
    arrow: <i class="fas fa-chevron-down fa-sm"></i>,
    toggle: true,
    rounded: "rounded",
  });
  const [toggle, setToggle] = useState(true);
  ///////////////////////////lifeCycle/////////////////////////

  ////////////////////////////function/////////////////////////
  const handleArrow = () => {
    setToggle(!toggle);
    if (toggle) {
      setState({
        ...allState,
        arrow: <i class="fas fa-chevron-up text-light"></i>,
        rounded: "rounded-top",
      });
    } else {
      setState({
        ...allState,
        arrow: <i class="fas fa-chevron-down fa-sm"></i>,
        rounded: "rounded",
      });
    }
  };
  ///////////////////////////render//////////////////////
  return (
    <div className="container-fluid my-5 p-0">
      <div
        className={"text-light background py-4 " + allState.rounded}
        data-bs-toggle="collapse"
        data-bs-target="#collapseFeature"
        role="button"
        aria-expanded="false"
        aria-controls="collapseFeature"
        onClick={handleArrow}
      >
        Expand full feature comparison {allState.arrow}
      </div>
      <div className="container-fluid collapse transition" id="collapseFeature">
        <div className="row ">
          <div className="d-none d-md-block col-6 border p-3"></div>
          <div className=" col-4 col-md-2 border p-3">
            <h4 className="mb-3 fs-4">Free</h4>
            <h2 className="mb-1 fs-5 text-muted ">
              $0
              <small className="fs-6 d-block d-md-inline">/month</small>
            </h2>
          </div>
          <div className="col-4 col-md-2 border p-3">
            <h4 className="mb-3 fs-4">Creator</h4>
            <h2 className="mb-1 fs-5 text-wrap">
              ${priceForCreator}
              <small className="fs-6 text-muted d-block d-md-inline">
                /month
              </small>
            </h2>
          </div>
          <div className=" col-4 col-md-2 border p-3">
            <h4 className="mb-3 fs-4 text-truncate">Creator Pro</h4>
            <h2 className="mb-1 fs-5">
              ${priceForCreator - 100}
              <small className="fs-6 text-muted d-block d-md-inline">
                /month
              </small>
            </h2>
          </div>
        </div>
        {data.feature.map((feature, index) => (
          <RowFeature
            key={index}
            header={feature.header}
            feature={feature.feature}
          />
        ))}
        <div className="row">
          {/* header */}
          <div className="col-12 col-md-6 order-4 order-md-1 p-3">
            <Input />
          </div>
          <div className="col-4 col-md-2 order-1 order-md-2 border p-3">
            <Offer priceForCreator={0} text={text1} btn="Sign up free" />
          </div>
          <div className="col-4 col-md-2 order-2 order-md-3 border p-3">
            <Offer
              priceForCreator={priceForCreator}
              text={text1}
              btn="Request a demo"
            />
          </div>
          <div className="col-4 col-md-2 order-3 order-md-4 border p-3">
            <Offer
              priceForCreator={priceForCreator - 100}
              text={text1}
              btn="Request a demo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
