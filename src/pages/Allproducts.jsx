import React, { useState, useEffect } from "react";
import productData from "../source.json";

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

 

  return (
    <div className="bg-[#EEEDEB] md:p-14">
      <h1 className="text-3xl font-semibold text-center">All Products</h1>
    <div className=" grid grid-cols-2 md:grid-cols-5 gap-4 p-10">
      {products.map((product) => (
        <div key={product.id} className="bg-[#efefef] border p-2 md:p-6 rounded-lg shadow-md">
          <img
            src={product.img} // Ensure the path works correctly with your setup
            alt={product.id}
            className="w-full h-auto"
          />
          <div className="mt-2">
            <h2 className="text-lg font-semibold">{product.type}</h2>
            <p className="text-sm text-gray-500">Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Allproducts;
