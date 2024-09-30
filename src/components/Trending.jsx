import React from "react";

import { useState} from "react";
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";
import pImg1 from "../assets/images/p-img1.png";
import pImg2 from "../assets/images/p-img2.png";
import pImg3 from "../assets/images/p-img3.png";
import pImg4 from "../assets/images/p-img4.png";
import pImg5 from "../assets/images/p-img5.png";
import pImg6 from "../assets/images/p-img6.png";

function Trending() {
 
  
  //useNavigate for navigiton between trending,allproducts pages
  const navigate=useNavigate();

  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('trending');
  const handleProductPage = () => {
    setActiveTab('products'); // Set active state to 'products'
    navigate('/Allproducts');
  };
  const handleTrendingPage = () => {
    setActiveTab('trending'); // Set active state to 'trending'
    navigate('/');
  };
 
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
      <div className="slider-container p-10 bg-[#B7B7B7] md:p-14">
      <h1 className="text-2xl md:text-3xl text-center  font-semibold">Trending Products</h1>
        <div className="flex justify-center md:justify-end gap-6 py-10 ">
          <p onClick={handleTrendingPage}
            className={`px-4 py-2 font-semibold border-none rounded-md cursor-pointer ${
              activeTab === 'trending' ? 'bg-slate-300 text-black' : 'bg-[#001F3F] text-white'
            }`}
          >Trending</p>
          <p onClick={handleProductPage}
            className={`px-4 py-2 font-semibold border-none rounded-md cursor-pointer ${
              activeTab === 'products' ? 'bg-slate-300 text-black' : 'bg-[#001F3F] text-white'
            }`}
          >All Products</p>
        </div>
        
        <Slider {...settings}>
          {trendProducts.map((item) => (
            <div key={item.id} className="py-8 md:py-10">
              <img src={item.img} alt={item.type} className="w-[90%] md:w-3/4 border-none rounded-sm" />
            </div>
          ))}
        </Slider>
        
      </div>
    </div>
  );
}

export default Trending;
