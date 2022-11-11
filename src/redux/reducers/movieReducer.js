import { recomended } from "../action/action";

const initialData = {
  recomended: [],
  newDisney: [],
  originals: [],
  trending: [],
};
const moviesReducers = (state = initialData, action) => {
  if (action.type === "RECOMENDED") {
    // console.log(action.payload);

    return {
      ...state,

      recomended: action.payload,
    };
  } else if (action.type === "NEW") {
    return {
      ...state,

      newDisney: action.payload,
    };
  } else if (action.type === "ORIGINALS") {
    return {
      ...state,

      originals: action.payload,
    };
  } else if (action.type === "TRENDING") {
    return {
      ...state,

      trending: action.payload,
    };
  } else {
    return state;
  }
};

export default moviesReducers;
