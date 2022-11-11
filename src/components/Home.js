import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recomends from "./Recomends";
import Treanding from "./Treanding";
import Viewers from "./Viewers";
import {
  recomended,
  newArrivals,
  originals,
  trending,
} from "../redux/action/action";
import { useSelector, useDispatch } from "react-redux";
import db from "../firebase";

const Home = () => {
  const username = useSelector((state) => state.disenyreducer);
  const dispatch = useDispatch();
  let recomendss = [];
  let newArrivalss = [];
  let originalss = [];
  let treandingss = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        // console.log(doc.data());

        if (doc.data().type === "recommend") {
          // dispatch(recomended({ id: doc.id, ...doc.data() }));
          recomendss.push({ id: doc.id, ...doc.data() });
          // recomendss = [...recomendss, { id: doc.id, ...doc.data() }];
        }
        if (doc.data().type === "new") {
          // dispatch(newArrivals({ id: doc.id, ...doc.data() }));
          newArrivalss.push({ id: doc.id, ...doc.data() });
        }
        if (doc.data().type === "trending") {
          // dispatch(trending({ id: doc.id, ...doc.data() }));
          treandingss.push({ id: doc.id, ...doc.data() });
        }
        if (doc.data().type === "original") {
          // dispatch(originals({ id: doc.id, ...doc.data() }));
          originalss.push({ id: doc.id, ...doc.data() });
        }
      });
      dispatch(recomended(recomendss));
      dispatch(newArrivals(newArrivalss));
      dispatch(originals(originalss));
      dispatch(trending(treandingss));
    });
  }, [username]);
  return (
    <div className="home_main">
      <ImageSlider />
      <Viewers />
      <Recomends />
      <NewDisney />
      <Originals />
      <Treanding />
    </div>
  );
};

export default Home;
