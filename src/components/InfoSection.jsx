import React from "react";
import {
  FaHeadset,
  FaMoneyBillWave,
  FaShippingFast,
  FaLock,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const section = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      text: "Get your Orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Free Shipping",
      text: "Get your Orders delivered with no extra cost",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Free Shipping",
      text: "Get your Orders delivered with no extra cost",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Free Shipping",
      text: "Get your Orders delivered with no extra cost",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Free Shipping",
      text: "Get your Orders delivered with no extra cost",
    },
  ];
  return (
    <div className="container mx-auto mt-16">
      <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {section.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center gap-3 p-3 text-center transition-all duration-200 delay-75 origin-top-left transform border shadow-md cursor-pointer hover:rotate-2 shadow-gray-400"
            key={index}
          >
            <div> {item.icon}</div>
            <p className="font-semibold ">{item.title}</p>
            <p className="text-sm font-light text-gray-500 ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
