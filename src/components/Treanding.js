import React from "react";
import sec from "../images/sec.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Treanding = () => {
  const myData = useSelector((state) => state.moviesReducers.trending);

  return (
    <div className="rec_main">
      <h4>Trending</h4>
      <section className="rec_sec">
        {myData &&
          myData.map((data) => {
            return (
              <Link to={`/details/${data.id}`} key={data.id}>
                <div className="rec_box">
                  <img src={data.cardImg} alt="Loading" />
                </div>
              </Link>
            );
          })}
        {/* <div className="rec_box">
          <img src={sec} alt="Loading" />
        </div>
        <div className="rec_box">
          <img src={sec} alt="Loading" />
        </div>
        <div className="rec_box">
          <img src={sec} alt="Loading" />
        </div> */}
      </section>
    </div>
  );
};

export default Treanding;
