import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (e, products) => {
    e.preventDefault();

    dispatch(addToCart({ products, quantity }));
    alert("added successfully");
  };

  return (
    <div className="mx-auto">
      <Link to={`/product/${products._id}`}>
        <div className="overflow-hidden border rounded-md ">
          <img
            className="w-full hover:scale-110 duration-200 transition-transform transform  max-sm:h-[400px] object-contain "
            src={products.image}
            alt=""
          />

          <div className="p-3 text-sm">
            <p className="font-semibold ">{products.name}</p>
            <p className="text-gray-500 ">$ {products.price}</p>
            <div className="flex justify-between ">
              <div className="flex items-center text-sm text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <div
                  onClick={(e) => handleAddToCart(e, products)}
                  className="flex group   hover:w-full justify-center cursor-pointer group  hover:px-[10px] hover:py-1 text-sm text-white bg-red-500 border rounded-full bottom-2"
                >
                  <span className="font-bold transition-transform duration-200 transform scale-0 group-hover:scale-110 group-hover:block">
                    Add to Cart
                  </span>
                  <span className="mr-3 font-bold group-hover:hidden">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
