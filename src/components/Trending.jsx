import React from "react";

import { Link } from "react-router-dom";

import Slider from "react-slick";
import pImg1 from "../assets/images/p-img1.png";
import pImg2 from "../assets/images/p-img2.png";
import pImg3 from "../assets/images/p-img3.png";
import pImg4 from "../assets/images/p-img4.png";
import pImg5 from "../assets/images/p-img5.png";
import pImg6 from "../assets/images/p-img6.png";

function Trending() {
 

  const trendProducts = [
    { id: 1, type: "women", img: pImg1 },
    { id: 2, type: "men", img: pImg2 },
    { id: 3, type: "women", img: pImg3 },
    { id: 4, type: "men", img: pImg4 },
    { id: 5, type: "men", img: pImg5 },
    { id: 6, type: "men", img: pImg6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480, // for mobile portrait
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="slider-container p-10 text-center bg-[#B7B7B7] md:p-14">
        <h1 className="text-xl md:text-3xl md:ml-4 md:mb-4 font-semibold">Trending Products</h1>
        <Slider {...settings}>
          {trendProducts.map((item) => (
            <div key={item.id} className="py-8 md:py-10">
              <img src={item.img} alt={item.type} className="w-[90%] md:w-3/4" />
            </div>
          ))}
        </Slider>
        <Link to={'/Allproducts'}>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >All Products
        </button></Link>
      </div>
    </div>
  );
}

export default Trending;
