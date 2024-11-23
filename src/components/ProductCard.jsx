import React from 'react'
import { FaStar } from 'react-icons/fa';

const ProductCard = ({products,index}) => {
  return (
    <div className="transition-transform transform border rounded-md hover:scale-105 ">
      <div>
        <img className="w-full " src={products.image} alt="" />
      </div>
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
            <div className="flex group hover:w-full justify-center group  px-[10px] py-1 text-sm text-white bg-red-500 border rounded-full bottom-2">
              <span className="hidden transition-all duration-500 group-hover:block">
                Add to Cart
              </span>
              <span className=" group-hover:hidden">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard