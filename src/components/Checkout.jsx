import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [informationToggle, setInformationToggle] = useState(false);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [payment, setPayment] = useState("cod");
  const { cart, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="container mx-auto p-7">
      <h1 className="text-2xl font-bold ">CHECKOUT</h1>
      <div className="flex flex-col justify-between gap-5 lg:items-start sm:flex-row sm:gap-16">
        <div className="flex-1 w-full">
          <div className="p-3 mt-4 text-sm font-bold border rounded-md">
            <p
              className="flex justify-between text-lg cursor-pointer"
              onClick={() => setInformationToggle(!informationToggle)}
            >
              Billing information{" "}
              <span>{informationToggle ? <FaAngleDown /> : <FaAngleUp />}</span>
            </p>
            <div className={`space-y-4 ${informationToggle ? "" : "hidden"}`}>
              <div className="mt-3 ">
                <label className="text-gray-600 ">Name</label>
                <br />
                <input
                  className="w-full p-3 border rounded-md outline-none"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mt-3 ">
                <label className="text-gray-600 ">Name</label>
                <br />
                <input
                  className="w-full p-3 border rounded-md outline-none"
                  type="number"
                  placeholder="PH #"
                />
              </div>
              <div className="mt-3 ">
                <label className="text-gray-600 ">Name</label>
                <br />
                <input
                  className="w-full p-3 border rounded-md outline-none"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
            </div>
          </div>
          <div className="p-3 mt-4 text-sm font-bold border rounded-md">
            <p
              className="flex justify-between text-lg cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              Shipping information{" "}
              <span>{shippingToggle ? <FaAngleDown /> : <FaAngleUp />}</span>
            </p>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div className="mt-3 ">
                <label className="text-gray-600 ">Address</label>
                <br />
                <input
                  className="w-full p-3 border rounded-md outline-none"
                  type="text"
                  placeholder="Enter Address"
                />
              </div>
              <div className="mt-3 ">
                <label className="text-gray-600 ">City</label>
                <br />
                <input
                  className="w-full p-3 border rounded-md outline-none"
                  type="text"
                  placeholder="Enter City"
                />
              </div>
              <div className="mt-3 ">
                <label className="text-gray-600 ">Zip Code</label>
                <br />
                <input
                  className="w-full p-3 border rounded-md outline-none"
                  type="text"
                  placeholder="Enter Zip Code"
                />
              </div>
            </div>
          </div>
          <div className="p-3 mt-4 text-sm font-bold border rounded-md">
            <p
              className="flex justify-between text-lg cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              Payment Method{" "}
              <span>{paymentToggle ? <FaAngleDown /> : <FaAngleUp />}</span>
            </p>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center justify-start gap-3 mt-3">
                <input
                  className=""
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
                <label htmlFor="">Cash on Delivery</label>
              </div>
              <div className="flex items-center justify-start gap-3 mt-3">
                <input
                  className=""
                  type="radio"
                  checked={payment === "dc"}
                  onChange={() => setPayment("dc")}
                />
                <label htmlFor="">Debit Card</label>
              </div>
              {payment === "dc" && (
                <div className="p-3 text-lg bg-gray-200 rounded-md">
                  <p>Debit Card information</p>
                  <div className="relative mt-3">
                    <input
                      className="w-full p-3 rounded-md focus:ring-4 peer"
                      type="text"
                      placeholder="enter card number"
                    />
                    <label className="absolute text-black  peer-focus:scale-0 font-semibold  top-[-10px] left-0 text-base  ">
                      Card Number
                    </label>
                  </div>
                  <div className="relative mt-3">
                    <input
                      className="w-full p-3 rounded-md focus:ring-4 peer"
                      type="text"
                      placeholder="enter card Holder name "
                    />
                    <label className="absolute text-black  peer-focus:scale-0 font-semibold  top-[-10px] left-0 text-base  ">
                      Card Holder Name
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <div className="relative mt-3">
                      <input
                        className="w-full p-3 rounded-md focus:ring-4 peer"
                        type="text"
                        placeholder="MM/YY"
                      />
                      <label className="absolute text-black  peer-focus:scale-0 font-semibold  top-[-10px] left-0 text-base  ">
                        Expiry Date
                      </label>
                    </div>
                    <div className="relative mt-3">
                      <input
                        className="w-full p-3 rounded-md focus:ring-4 peer"
                        type="text"
                        placeholder="CVV"
                      />
                      <label className="absolute text-black  peer-focus:scale-0 font-semibold  top-[-10px] left-0 text-base  ">
                        CVV
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-3 mt-4 shadow-xl ">
          <p className="text-base font-bold">Order Summary</p>
          {cart.map((item) => (
            <div key={item._id}>
              <div className="p-4">
                <div className="flex items-center justify-between my-4 gap-7">
                  <img className="size-20 " src={item.image} alt="product" />
                  <p className="text-sm font-semibold">
                    {item.name} <br />
                    <span className="font-normal text-gray-600">
                      <FaRupeeSign className="inline text-sm" /> {item.price}*
                      {item.quantity}
                    </span>
                  </p>
                  <p className="text-gray-600 ">
                    <FaRupeeSign className="inline" />
                    {item.price}
                  </p>
                </div>
                <hr />
              </div>
            </div>
          ))}
          <div className="flex justify-between my-3 text-gray-600">
            <p className="font-semibold">Total Price</p>
            <p>
              {" "}
              <FaRupeeSign className="inline" />
              {totalPrice}
            </p>
          </div>
          <div className="flex justify-center">
            {" "}
            <button className="w-full p-3 text-lg hover:bg-white transition-all font-black hover:text-red-600 hover:ring-2 ring-blue-600 active:text-transparent text-white bg-red-600 rounded-md max-w-[300px]">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
