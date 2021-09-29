import React from "react";
import Offers from "./Offers/Offers";
import Feature from "./Feature/Feature";
import Input from "./inputs/Input";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid text-center">
      <div className="mt-5">
        <h1>Plans for every stage of</h1>
        <h1>your creator journey</h1>
        <br />
        <br />
        <br />
      </div>
      <Input />
      <Offers />
      <Feature />
    </div>
  );
};
export default Home;
