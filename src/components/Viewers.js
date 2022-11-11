import React from "react";
import logo from "../images/logo.png";
import marvel from "../images/marvel.png";
import pixar from "../images/pixar.png";
import star from "../images/star.png";
import gio from "../images/gio.png";
import disney from "../videos/disney.mp4";
import marvell from "../videos/marvel.mp4";
import net from "../videos/nat.mp4";
import pixarr from "../videos/pixar.mp4";
import starr from "../videos/star.mp4";

const Viewers = () => {
  return (
    <section className="viwe_main">
      <div className="viwe">
        <img src={logo} alt="Loading..." />
        <video autoPlay muted loop>
          <source src={disney} type="video/mp4" />
        </video>
      </div>
      <div className="viwe">
        <img src={marvel} alt="Loading..." />
        <video autoPlay muted loop>
          <source src={marvell} type="video/mp4" />
        </video>
      </div>
      <div className="viwe">
        <img src={pixar} alt="Loading..." />
        <video autoPlay muted loop>
          <source src={pixarr} type="video/mp4" />
        </video>
      </div>
      <div className="viwe">
        <img src={star} alt="Loading..." />
        <video autoPlay muted loop>
          <source src={starr} type="video/mp4" />
        </video>
      </div>
      <div className="viwe">
        <img src={gio} alt="Loading..." />
        <video autoPlay muted loop>
          <source src={net} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Viewers;
