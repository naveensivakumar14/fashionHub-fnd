
//React Slick Library
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




//image import
import banner1 from "../assets/images/fh-hero1.jpg"
import banner2 from "../assets/images/fh-hero2.jpg"
import banner3 from "../assets/images/fh-hero3.jpg"

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 3000,      // 3 seconds delay between slides
    pauseOnHover: true        // Pause on hover for better user experience
  };
  return (

   <div className="flex justify-center">
    <div className="slider-container w-full md:h-screen  md:py-2 md:px-2 md:w-[90%]">
      <Slider {...settings}>
        <div className="border-none md:h-[80vh] md:w-1/2 relative">
            <h1 className="absolute text-xs top-6 right-4 md:text-2xl font-semibold md:top-[150px] md:right-[100px]">Stay awesome, always!</h1>
            <img src={banner1} alt="hero1" />
        </div>
        <div className="border-none md:h-[80vh] md:w-1/2 relative">
            <h1 className="absolute text-xs top-28 left-7 md:text-2xl font-semibold md:top-[150px] md:left-[100px]">Minimel Mens Styles</h1>
            <img src={banner2} alt="hero1" />
        </div>
        <div className="border-none md:h-[80vh] md:w-1/2 relative">
            <h1 className="absolute text-xs top-20 left-5  md:text-2xl font-semibold md:top-[150px] md:left-[100px]">Our Premium Collections</h1>
            <img src={banner3} alt="hero1" />
        </div>
      </Slider>
    </div>
    </div>

  );
}

export default SimpleSlider;
