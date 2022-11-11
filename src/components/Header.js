import React, { useEffect } from "react";
import logo from "../images/logo.png";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getData, signout } from "../redux/action/action";
import {
  FaHome,
  FaSearch,
  FaPlus,
  FaRegStar,
  FaFilm,
  FaTv,
} from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.disenyreducer);
  // console.log(data);
  const satya = data.list.name;

  useEffect(() => {
    let setUser = (user) => {
      dispatch(
        getData({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    };
    auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      if (user) {
        setUser(user);
        navigate("./home");
      } else {
        navigate("/");
      }
    });
  }, [data.list.name]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then((res) => {
        // console.log(res);
        dispatch(signout());
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result.user.multiFactor.user);
        setUser(result.user.multiFactor.user);
      })
      .catch((err) => {
        console.log(err);
      });

    let setUser = (user) => {
      dispatch(
        getData({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    };
  };

  return (
    <div className="header">
      <img src={logo} height={50} alt="" />

      {satya.length === 0 ? (
        <button className="login_btn" onClick={handleAuth}>
          Login
        </button>
      ) : (
        <>
          <div className="all_links">
            <ul>
              <li>
                <FaHome />
                <a href="/home">Home</a>
              </li>
              <li>
                <FaSearch />
                <a href="/search">Search</a>
              </li>
              <li>
                <FaPlus />
                <a href="/wishlist">Wishlist</a>
              </li>
              <li>
                <FaRegStar />
                <a href="/originals">Originals</a>
              </li>
              <li>
                <FaFilm />
                <a href="/movies">Movies</a>
              </li>
              <li>
                <FaTv />
                <a href="/series">Series</a>
              </li>
            </ul>
          </div>
          <div className="dsip_pic">
            <img src={data.list.photo} alt="Loding..." />
            <button className="signout" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
