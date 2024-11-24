import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, products) => {
    e.preventDefault();

    dispatch(addToCart(products));
    alert("added succesfully");
  };

  return (
    <div className="mx-auto">
      <div className="transition-transform transform border rounded-md hover:scale-105 ">
        <img
          className="w-full max-sm:h-[400px] object-contain "
          src={products.image}
          alt=""
        />

        <div className="p-3 text-sm">
          <p className="font-semibold ">{products.name}</p>
          <p className="text-gray-500 ">$ {products.price}</p>
          <div className="flex justify-between ">
            <div className="flex text-sm text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>
              <div
                onClick={(e) => handleAddToCart(e, products)}
                className="flex group hover:w-full justify-center cursor-pointer group  px-[10px] py-1 text-sm text-white bg-red-500 border rounded-full bottom-2"
              >
                <span className="hidden transition-all duration-500 group-hover:block">
                  Add to Cart
                </span>
                <span className=" group-hover:hidden">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
