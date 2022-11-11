const initialData = {
  list: {
    name: "",
    email: "",
    photo: "",
  },
};

const disenyreducer = (state = initialData, action) => {
  if (action.type === "GET_DATA") {
    // console.log(action.payload.data);
    const { name, email, photo } = action.payload.data;
    // console.log(name);
    return {
      ...state,
      list: {
        name: name,
        email: email,
        photo: photo,
      },
    };
  } else if (action.type === "SIGN_OUT") {
    console.log("satya");
    return {
      list: {
        name: "",
        email: "",
        photo: "",
      },
    };
  } else {
    return state;
  }
};

export default disenyreducer;
