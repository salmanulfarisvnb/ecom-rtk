import React from "react";
import { FaRightToBracket } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { shippingInfo, cart, totalPrice, orderId } = location.state || {};
  if (!cart.length > 0)
    return (
      <div className="container flex items-center justify-center h-screen p-7">
        <h1 className="text-4xl font-black">Not order summary</h1>
      </div>
    );

  return (
    <div className="container p-4 mx-auto mt-7">
      <div>
        <h1 className="text-3xl font-semibold">Thank you for your Order</h1>
        <p className="mt-3 text-gray-600">
          Your order has been placed successfully. You will receive an email
          confirmation shortly
        </p>
      </div>
      <div className="w-full max-w-[700px]">
        <div className="p-3 mt-3 space-y-3 bg-gray-200 border rounded-md shadow-md ">
          <h1 className="text-xl">Order Summary</h1>
          <p className="text-gray-500">Order Id :{orderId}</p>
          <h1 className="text-xl">Shipping information </h1>
          <p className="text-gray-500">Address : {shippingInfo.address}</p>
          <p className="text-gray-500">City : {shippingInfo.city}</p>
          <p className="text-gray-500">Zip Code : {shippingInfo.zip}</p>
          <h1 className="text-xl ">Item Ordered</h1>
          <div className=" mb-3 scroll_bar scrollbar-thin  overflow-auto scrollbar-thumb-red-200   pr-3  max-h-[100px]">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between space-y-3 "
              >
                <p className="text-gray-500">
                  {item.name} (&#215;{item.quantity})
                </p>
                <p className="text-gray-500">{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-7">
            <p className="font-bold text-gray-700">Total Price</p>
            <p className="text-gray-500">{totalPrice}</p>
          </div>
        </div>
        <div className="flex items-center justify-between my-4">
          <button className="w-full p-3 text-lg hover:bg-red-600 transition-all font-black hover:text-white hover:ring-2 ring-blue-600 active:text-transparent text-red-600 bg-white border rounded-md max-w-[300px]">
            Order Tracking
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full p-3 text-lg hover:bg-white transition-all font-black hover:text-red-600 hover:ring-2 ring-blue-600 active:text-transparent text-white bg-red-600 rounded-md max-w-[300px]"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
