import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { _id: id } = useParams();
  const { products } = useSelector((state) => state.product);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const findProduct = products.find((item) => item._id === id);
    setProduct(findProduct);
  }, [id]);

  return (
    <div className="container flex flex-col items-center mx-auto p-7 ">
      <div className="flex w-full  max-w-[800px]">
        {/* Left side..... */}
        <div className="flex flex-col flex-1 gap-3 border sm:flex-row ">
          <img src={product.image} className="w-full sm:w-1/2" alt="" />
          <div className="flex flex-col items-center justify-center m-auto ">
            <p className="text-xl font-semibold ">{product.name}</p>
            <p>
              <FaRupeeSign className="inline" />
              {product.price}
            </p>
            <div className="flex my-3">
              <input
                className=" w-[60px] border text-center"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button className="w-full flex-1 px-6 ml-2 text-lg hover:bg-white transition-all font-black hover:text-red-600 hover:ring-2 ring-blue-600 active:text-transparent text-white bg-red-600 rounded-md max-w-[300px]">
                Add to Cart
              </button>
            </div>
            <p className="text-sm text-gray-600">Delivery and return</p>
            <p className="text-sm text-gray-600">Ask a Question</p>
          </div>
        </div>
      </div>
      {/* .....Bottom... */}
      <div className="my-3">
        <p className="text-sm font-bold sm:text-base">Product Description</p>
        <p className="text-sm text-gray-600 ">
          Product description will goes here
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
