import { configureStore } from "@reduxjs/toolkit";
import bubbleRangeReducer from "./Reducer/bubbleRangeReducer/bubbleRangeReducer";
import priceForCreatorReducer from "./Reducer/priceForCreatorReducer/priceForCreatorReducer";
import toggleReducer from "./Reducer/toggleReducer/toggleReducer";
import toggleStyleReducer from "./Reducer/toggleStyleReducer/toggleStyleReducer";
import valueReducer from "./Reducer/valueReducer/valueReducer";

const store = configureStore({
  reducer: {
    value: valueReducer,
    toggleYearOrMonth: toggleReducer,
    toggleStyle: toggleStyleReducer,
    priceForCreator: priceForCreatorReducer,
    bubblestyle:bubbleRangeReducer,
  },
});
export default store;
