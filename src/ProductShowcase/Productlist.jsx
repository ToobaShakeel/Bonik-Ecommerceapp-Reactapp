import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import "./Productlist.css";

const products = [
    {
        id: 1,
        cover: "./images/Clothes/C1.png",
        name: "White Short Frock",
        price: 500,
      },
      {
        id: 2,
        cover: "./images/Clothes/C2.png",
        name: "Yellow Frock With Belt",
        price: 500,
      },
      {
        id: 3,
        cover: "./images/Clothes/C3.png",
        name: "Pink Skirt",
        price: 1000,
      },
      {
        id: 4,
        cover: "./images/Clothes/C4.png",
        name: "White Mexi",
        price: 1500,
      },
      {
        id: 5,
        cover: "./images/Clothes/C5.png",
        name: "Green Polo Shirt",
        price: 1000,
      },
      {
        id: 6,
        cover: "./images/Clothes/C6.png",
        name: "Red T-Shirt",
        price: 500,
      },
      {
        id: 7,
        cover: "./images/Electronics/E1 (1).png",
        name: "Rice Cooker",
        price: 500,
      },
      {
        id: 8,
        cover: "./images/Electronics/E2.png",
        name: "Blender Set",
        price: 1000,
      },
      {
        id: 9,
        cover: "./images/Electronics/E5.png",
        name: "Red & White Blender Set",
        price: 1500,
      },
      {
        id: 10,
        cover: "./images/Electronics/E6.png",
        name: "Stove",
        price: 1500,
      },
      {
        id: 11,
        cover: "./images/Electronics/E4.png",
        name: "Egg Beater",
        price: 1500,
      },
];
const ProductList = () => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [showResults, setShowResults] = useState(false);
  
    const handleMinPriceChange = (event) => {
      setMinPrice(event.target.value);
    };
  
    const handleMaxPriceChange = (event) => {
      setMaxPrice(event.target.value);
    };
  
    const handleFilterButtonClick = () => {
      setShowResults(true);
    };
  
    const filterProducts = () => {
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
  
      if (!isNaN(min) && !isNaN(max)) {
        return products.filter((product) => product.price >= min && product.price <= max);
      } else if (!isNaN(min)) {
        return products.filter((product) => product.price >= min);
      } else if (!isNaN(max)) {
        return products.filter((product) => product.price <= max);
      } else {
        return [];
      }
    };
  
    const filteredProducts = filterProducts();
  
    return (
      <div className="container">
        <div className="filter-container">
          <label className="label">Min Price:</label>
          <input className="input" type="text" value={minPrice} onChange={handleMinPriceChange} />
          <label className="label">Max Price:</label>
          <input className="input" type="text" value={maxPrice} onChange={handleMaxPriceChange} />
          <button className="button" onClick={handleFilterButtonClick}>
            <FontAwesomeIcon icon={faFilter} /> Filter
          </button>
        </div>
        {showResults && (
          <ul className="results">
            {filteredProducts.map((product) => (
              <li className="result-item" key={product.id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default ProductList;