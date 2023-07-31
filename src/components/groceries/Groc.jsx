import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const Groc = ({ items }) => {
  const [groceryItems, setGroceryItems] = useState(() =>
    items.map((item) => ({ ...item, count: 0 }))
  );

  const increment = (index) => {
    setGroceryItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].count += 1;
      return newItems;
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {groceryItems.map((item, index) => (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <img src={item.cover} alt="" />
                <div className="product-like">
                  <label>{item.count}</label> <br />
                  <i
                    className="fa-regular fa-heart"
                    onClick={() => increment(index)}
                  ></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${item.price}.00</h4>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Groc;
