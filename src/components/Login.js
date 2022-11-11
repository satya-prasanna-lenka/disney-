import React from "react";
import bg from "../images/bg.jpg";
import logo from "../images/logo.png";
import marvel from "../images/marvel.png";
import pixar from "../images/pixar.png";
import star from "../images/star.png";
import gio from "../images/gio.png";

const Login = () => {
  const myStyle = {
    backgroundImage: ` linear-gradient( to right, black ,rgba(0, 0, 0, 0.849), transparent), url("${bg}")`,
    height: "100vh",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle} className="containerr">
      <div className="contain">
        <img src={logo} className="main_logo" alt="" height={100} />
        <button className="get_all">get all there</button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum rem
          neque corrupti, sed molestias, exercitationem laudantium quo a ipsum
          ex blanditiis odio animi! Sequi enim quae esse magnam nihil provident.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum rem
          neque corrupti, sed molestias, exercitationem laudantium quo a ipsum
          ex blanditiis odio animi! Sequi enim quae esse magnam nihil provident.
        </p>
        <div className="all_logo">
          <img src={logo} height={60} alt="" />
          <img src={marvel} height={60} alt="" />
          <img src={pixar} height={60} alt="" />
          <img src={star} height={60} alt="" />
          <img src={gio} height={60} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
