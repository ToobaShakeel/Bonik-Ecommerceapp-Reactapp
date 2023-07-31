import React from "react";
import Garden from "./Garden";
import HGdata from "./HGdata";
import "./Garden.css";
const GardenDeals = ({ addToCart }) => {
  return (
    <section className="garden">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt"></i>
          <h1>Home & Garden</h1>
        </div>
        <Garden HGItems={HGdata.HGItems} addToCart={addToCart} />
      </div>
    </section>
  );
};

export default GardenDeals;
