import React, { useState, useEffect } from "react";
import productData from "../source.json";

import { useNavigate } from 'react-router-dom';

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);



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
 

  return (
    <div className="bg-[#EEEDEB] md:p-14">
      
      {/* this block  common for trending.jsx and allproduct.jsx */}
       <h1 className="text-2xl md:text-3xl font-semibold text-center pt-6">All Products</h1>
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



     
    <div className=" grid grid-cols-2 md:grid-cols-6 gap-4 p-10 xl:py-16 xl:px-40">
      {products.map((product) => (
        <div key={product.id} className="bg-[#efefef] border p-2 md:p-1 rounded-lg shadow-md">
          <img
            src={product.img} // Ensure the path works correctly with your setup
            alt={product.id}
            className="w-full h-auto"
          />
          <div className="mt-1 p-2">
            <h2 className="text-sm md:text-lg font-semibold">{product.type}</h2>
            <p className="text-sm text-gray-500">Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default Allproducts;
