import  { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "../../../Redux/Reducer/toggleReducer/toggleReducer";
import "./InputToggleButton.css";
const InputToggleButton = () => {
  const dispatch = useDispatch();
  let toggleNumber = useSelector((state) => state.toggleYearOrMonth);

  useEffect(() => {
    let toggle = document.getElementById("container");
    let toggleContainer = document.getElementById("toggle-container");

    console.log(toggleNumber);
    toggle.addEventListener("click", function () {
      toggleNumber = !toggleNumber;
      dispatch(handleToggle(toggleNumber));
      if (toggleNumber) {
        toggleContainer.style.clipPath = "inset(0 0 0 50%)";
        toggleContainer.style.backgroundColor = "#D74046";
      } else {
        toggleContainer.style.clipPath = "inset(0 50% 0 0)";
        toggleContainer.style.backgroundColor = "dodgerblue";
      }
      console.log(toggleNumber);
    });
  }, []);

  return (
    <div>
      <div id="container" className="mt-5">
        <div className="inner-container">
          <div className="toggle">
            <p>Yearly</p>
          </div>
          <div className="toggle">
            <p>Monthly</p>
          </div>
        </div>
        <div className="inner-container" id="toggle-container">
          <div className="toggle">
            <p>Yearly</p>
          </div>
          <div className="toggle">
            <p>Monthly</p>
          </div>
        </div>
      </div>
      <div className="text-muted fst-italic  end">
        (Get two months free)
        <div className="arrow d-inline-block ">&#10559;</div>
      </div>
    </div>
  );
};

export default InputToggleButton;
