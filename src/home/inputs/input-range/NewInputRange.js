import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bubbleStyle } from "../../../Redux/Reducer/bubbleRangeReducer/bubbleRangeReducer";
import { readValue } from "../../../Redux/Reducer/valueReducer/valueReducer";
import "./InputRange.css";
import data from "../../../data.json";

const NewInputRange = () => {
  const value = useSelector((state) => state.value);
  const left = useSelector((state) => state.bubblestyle);
  const dispatch = useDispatch();

  //////////////////function//////////////////////
  const rangeValue = () => {
    if (value < 10000) {
      return value;
    } else {
      const newValue = `${value / 1000}k`;
      return newValue;
    }
  };

  //   useEffect(() => {
  //     const allRanges = document.querySelectorAll(".range-wrap");
  //     allRanges.forEach((wrap) => {
  //       handlerRange();
  //       setBubble(range);
  //     });
  //   }, []);

  const handlerRange = (e) => {
    const range = e.target;
    dispatch(readValue(range.value));
    setBubble(range);
  };
  const setBubble = (range) => {
    const min = range.min;
    const max = range.max;
    const newVal = Number(((range.value - min) * 100) / (max - min));
    dispatch(bubbleStyle(newVal));
    // if (range.value < 10000) {
    //   bubble.innerHTML = value;
    // } else {
    //   bubble.innerHTML = `${value / 1000}k`;
    // }
    // Sorta magic numbers based on size of the native UI thumb
    // bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  };

  return (
    <div className="py-4 d-flex justify-content-center">
      <span>{data.inputValue.leftSide}</span>
      <div className="range-wrap">
        <input
          type="range"
          min={data.inputValue.min}
          max={data.inputValue.max}
          step={data.inputValue.step}
          className="range"
          value={value}
          onChange={handlerRange}
        />
        <output className="bubble" style={left}>
          {rangeValue()}
        </output>
      </div>
      <span>{data.inputValue.rightSide}</span>
    </div>
  );
};
export default NewInputRange;
