import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "../../../Redux/Reducer/toggleReducer/toggleReducer";
import { style } from "../../../Redux/Reducer/toggleStyleReducer/toggleStyleReducer";
import "./InputToggleButton.css";

const NewInputToggleButton = () => {
  const dispatch = useDispatch();
  let toggleNumber = useSelector((state) => state.toggleYearOrMonth);
  const toggleStyle = useSelector((state) => state.toggleStyle);


  const handleToggler = () => {
    toggleNumber = !toggleNumber;
    dispatch(handleToggle(toggleNumber));
    dispatch(style(toggleNumber));
  };

  
  return (
    <div>
      <div onClick={handleToggler} className="mt-5" id="container">
        <div className="inner-container">
          <div className="toggle">
            <p>Yearly</p>
          </div>
          <div className="toggle">
            <p>Monthly</p>
          </div>
        </div>
        <div
          className="inner-container"
          id="toggle-container"
          style={toggleStyle}
        >
          <div className="toggle">
            <p>Yearly</p>
          </div>
          <div className="toggle">
            <p>Monthly</p>
          </div>
        </div>
      </div>
      <div className="text-muted fst-italic end">
        (Get two months free)
        <div className="arrow d-inline-block ">&#10559;</div>
      </div>
    </div>
  );
};

export default NewInputToggleButton;
