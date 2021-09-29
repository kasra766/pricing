import React from "react";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import HeaderFeature from "./headerFeature";
import "./rowFeature.css";
const RowFeature = ({ header, feature }) => {
  const [placeToggle, setPlaceToggle] = useState("right");
  useEffect(() => {
    handlePlace();
    window.addEventListener("resize", handlePlace);
  }, []);

  const handlePlace = () => {
    if (window.innerWidth > 767) {
      setPlaceToggle("right");
    } else {
      setPlaceToggle("left");
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6 border text-start p-3 fs-5 fw-bold bg">
        {header}
      </div>
      <div className="d-none d-md-block col-md-2 border p-3 bg"></div>
      <div className="d-none d-md-block col-md-2 border p-3 bg"></div>
      <div className="d-none d-md-block col-md-2 border p-3 bg"></div>

      {feature.map((feature, index) => (
        <div className="col-12 border text-start" key={index}>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 p-3 borderBottom">
              <div className="row">
                <div className="col-10">{feature.name}</div>
                <div className="col-2 text-end">
                  <span className="pointer" data-tip data-for={`${feature.id}`}>
                    <i class="fas fa-question-circle"></i>
                  </span>
                  <ReactTooltip
                    id={`${feature.id}`}
                    place={placeToggle}
                    effect="solid"
                  >
                    <span>{feature.toggleText}</span>
                  </ReactTooltip>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <HeaderFeature colomn={feature.colomn} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RowFeature;
