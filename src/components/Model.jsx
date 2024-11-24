import React from "react";
import { FaClosedCaptioning, FaWindowClose } from "react-icons/fa";

const Model = ({ model, setModel, children }) => {
  if (!model) return null;
  return (
    <div className="fixed z-50 flex items-center justify-center w-full h-full p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg bg-opacity-90 top-1/2 left-1/2 ">
      <button className="absolute top-0 right-0 p-4 text-2xl">
        <FaWindowClose onClick={() => setModel(false)} />
      </button>
      {children}
    </div>
  );
};

export default Model;
