import React from "react";
import "./headerFeature.css";
const HeaderFeature = ({ colomn }) => (
  <div className="row">
    {colomn.map((colomn) => {
      if (typeof colomn === "string") {
        return (
          <div className="col-4 border-start text-center p-3">{colomn}</div>
        );
      } else if (typeof colomn === "boolean" && colomn === true) {
        return (
          <div className="col-4 border-start text-center p-3">
            <i class="fas fa-check text-success fs-2"></i>
          </div>
        );
      } else {
        return (
          <div className="col-4 border-start text-center p-3">
            <hr class="dash text-muted w-25" />
          </div>
        );
      }
    })}
  </div>
);
export default HeaderFeature;
