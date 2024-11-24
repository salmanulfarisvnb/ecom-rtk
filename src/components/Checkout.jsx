import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [informationToggle, setInformationToggle] = useState(false);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [payment, setPayment] = useState("cod");
  return (
    <div className=" p-7">
      <div>
        <h1 className="text-2xl font-bold ">CHECKOUT</h1>
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
              <label htmlFor="">Cash on Delivery</label>
            </div>
          </div>
        </div>
      </div>
      <div>{payment}</div>
    </div>
  );
};

export default Checkout;
