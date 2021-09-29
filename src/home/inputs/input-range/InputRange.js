import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { readValue } from "../../../Redux/Reducer/valueReducer/valueReducer";
import "./InputRange.css";

const InputRange = () => {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const allRanges = document.querySelectorAll(".range-wrap");
    allRanges.forEach((wrap) => {
      const range = wrap.querySelector(".range");
      const bubble = wrap.querySelector(".bubble");

      range.addEventListener("input", () => {
        setBubble(range, bubble);
      });
      setBubble(range, bubble);
    });
    function setBubble(range, bubble) {
      dispatch(readValue(range.value));
      const min = range.min ? range.min : 0;
      const max = range.max ? range.max : 500000;
      const newVal = Number(((range.value - min) * 100) / (max - min));

      if (range.value < 10000) {
        bubble.innerHTML = range.value;
      } else {
        bubble.innerHTML = `${range.value / 1000}k`;
      }
      // Sorta magic numbers based on size of the native UI thumb
      bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
  }, []);

  return (
    <div className="py-4 d-flex justify-content-center">
      <span>0</span>
      <div className="range-wrap">
        <input
          type="range"
          min="0"
          max="500000"
          step="1000"
          className="range"
          value={value}
        />
        <output className="bubble"></output>
      </div>
      <span>500k</span>
    </div>
  );
};
export default InputRange;
