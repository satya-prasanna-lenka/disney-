export const getData = (data) => {
  return {
    type: "GET_DATA",
    payload: { data },
  };
};

export const signout = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const recomended = (allData) => {
  return {
    type: "RECOMENDED",
    payload: allData,
  };
};

export const newArrivals = (myData) => {
  return {
    type: "NEW",
    payload: myData,
  };
};
export const originals = (oriData) => {
  return {
    type: "ORIGINALS",
    payload: oriData,
  };
};
export const trending = (treData) => {
  return {
    type: "TRENDING",
    payload: treData,
  };
};
