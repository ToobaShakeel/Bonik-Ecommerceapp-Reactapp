import React from "react";
import Fashion from "./Fashion";
import "./Fashion.css";
import Fdata from "./Fdata"; // Import the data from Fdata.js

const FashionDeals = ({ addToCart }) => {
  return (
    <section className='fashion'>
      <div className='container'>
        <div className='heading f_flex'>
          <i className='fa fa-bolt'></i>
          <h1>Fashion</h1>
        </div>
        <Fashion fashionItems={Fdata.fashionItems} addToCart={addToCart} /> {/* Pass fashionItems from Fdata */}
      </div>
    </section>
  );
};

export default FashionDeals;
