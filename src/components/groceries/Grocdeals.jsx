import React from "react";
import Groc from "./Groc";
import "./style.css";
import Gdata from "./Data"; // Make sure to provide the correct path to Gdata.js

const GrocDeals = () => {
  // Define the addToCart function here
  const addToCart = (item) => {
    // Implement your addToCart logic here
  };

  return (
    <>
      <section className="Groc">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Groceries</h1>
          </div>
          <Groc items={Gdata.item} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default GrocDeals;