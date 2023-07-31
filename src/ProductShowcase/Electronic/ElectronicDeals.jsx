import React from "react";
import Electronic from "./Electronic";
import "./Electronic.css";
import Edata from "./Edata"; // Import the data from Edata.js

const ElectronicDeals = ({ addToCart }) => {
  return (
    <section className="electronic">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt"></i>
          <h1>Electronics</h1>
        </div>
        {/* Pass electronicItems from Edata */}
        <Electronic electronicItems={Edata.electronicItems} addToCart={addToCart} />
      </div>
    </section>
  );
};

export default ElectronicDeals;
