import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creator } from "../../Redux/Reducer/priceForCreatorReducer/priceForCreatorReducer";
import SingleOffer from "./single-offer";
import "./Offers.css";

const Offers = () => {
  const readRange = useSelector((state) => state.value);
  const readToggle = useSelector((state) => state.toggleYearOrMonth);
  const dispatch = useDispatch();
  /////////////////////////state/////////////////////////////
  const [allState, setState] = useState({
    collapse: "",
    property: [
      {
        arrow: <i class="fas fa-chevron-down fa-sm transition"></i>,
        toggleArrow: false,
        border: "",
        borderChild: "border ",
        show: "invisible",
        id: 1,
      },
      {
        arrow: <i class="fas fa-chevron-down fa-sm transition"></i>,
        toggleArrow: false,
        border: "",
        borderChild: "border ",
        show: "visible",
        id: 2,
      },
      {
        arrow: <i class="fas fa-chevron-down fa-sm transition"></i>,
        toggleArrow: false,
        border: "",
        borderChild: "border ",
        show: "invisible",
        id: 3,
      },
    ],
  });
  //////////////////////////lifeCycle/////////////////////////
  useEffect(() => {
    handleBorder();
    dispatch(creator({ readToggle, readRange }));
  }, [readToggle, readRange]);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  /////////////////////////////function//////////////////////////
  const handleBorder = () => {
    if (readRange > 50000 && readRange < 300000) {
      setState({
        ...allState,
        property: [
          allState.property[0],
          {
            ...allState.property[1],
            border: "border border-primary",
            borderChild: " ",
            show: "visible",
          },
          {
            ...allState.property[2],
            border: "",
            borderChild: "border ",
            show: "invisible",
          },
        ],
      });
    } else if (readRange > 300000) {
      setState({
        ...allState,
        property: [
          allState.property[0],
          {
            ...allState.property[1],
            border: "",
            borderChild: "border ",
            show: "invisible",
          },
          {
            ...allState.property[2],
            border: "border border-primary",
            borderChild: " ",
            show: "visible",
          },
        ],
      });
    } else {
      setState({
        ...allState,
        property: [
          allState.property[0],
          {
            ...allState.property[1],
            border: "",
            borderChild: "border ",
            show: "invisible",
          },
          {
            ...allState.property[2],
            border: "",
            borderChild: "border ",
            show: "invisible",
          },
        ],
      });
    }
  };

  const handleArrow = (id) => {
    const findIndexProperty = allState.property.findIndex(
      (property) => property.id === id
    );
    const oldProperty = allState.property[findIndexProperty];
    const newPropertyToggle = !oldProperty.toggleArrow;
    if (newPropertyToggle) {
      setState({
        ...allState,
        property: [
          ...allState.property.slice(0, findIndexProperty),
          {
            ...oldProperty,
            arrow: (
              <i class="fas fa-chevron-down fa-sm transition arrowToggler"></i>
            ),
            toggleArrow: newPropertyToggle,
          },
          ...allState.property.slice(
            findIndexProperty + 1,
            allState.property.length
          ),
        ],
      });
    } else {
      setState({
        ...allState,
        property: [
          ...allState.property.slice(0, findIndexProperty),
          {
            ...oldProperty,
            arrow: <i class="fas fa-chevron-down fa-sm transition"></i>,
            toggleArrow: newPropertyToggle,
          },
          ...allState.property.slice(
            findIndexProperty + 1,
            allState.property.length
          ),
        ],
      });
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setState({
        collapse: "",
        property: allState.property.map((p) => ({
          ...p,
          arrow: <i class="fas fa-chevron-down fa-sm transition"></i>,
          toggleArrow: false,
        })),
      });
    } else {
      setState({
        ...allState,
        collapse: "collapse",
      });
    }
  };
  ///////////////////////////////////////render////////////////////////////
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {allState.property.map((item) => (
          <SingleOffer
            key={item.id}
            id={item.id}
            border={item.border}
            borderChild={item.borderChild}
            borderShow={item.show}
            handleArrow={handleArrow}
            arrows={item.arrow}
            collapse={allState.collapse}
            bootStrapCollapse={"collapseExample" + item.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Offers;
