import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const FilterPage = () => {
  const { filteredProducts } = useSelector((state) => state.product);

  if (!filteredProducts.length > 0)
    return (
      <div className="container flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-red-600">No Search Item</h1>
      </div>
    );

  return (
    <div className="container py-12 mx-auto ">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {filteredProducts.map((item, index) => (
          <ProductCard key={index} products={item} />
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
