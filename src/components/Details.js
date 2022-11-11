import React, { useEffect, useState } from "react";
import bg from "../images/bg.jpg";
import { FaPlay, FaPlus } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { useParams } from "react-router";
import db from "../firebase";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [detailsData, setDetailsData] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailsData(doc.data());
        } else {
          console.log("no such data");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="details_main">
      <div className="details_container">
        <img height={200} src={detailsData.titleImg} alt="" />
        <div className="details_button">
          <button className="details_play">
            <FaPlay />
            Play
          </button>
          <button className="details_trailer">
            <FaPlay />
            Trailer
          </button>
          <button className="details_plus">
            <FaPlus />
          </button>
          <button className="details_group">
            <BiGroup />
          </button>
        </div>
        <div className="details_all">
          <h4>{detailsData.subTitle}</h4>
          <h2>{detailsData.description}</h2>
        </div>
      </div>

      <div className="details_img">
        <img src={detailsData.backgroundImg} alt="" />
      </div>
    </div>
  );
};

export default Details;
