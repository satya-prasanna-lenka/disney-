import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
