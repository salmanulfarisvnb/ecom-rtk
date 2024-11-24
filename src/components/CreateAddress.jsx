import React, { useState } from "react";

const CreateAddress = ({ model, setModel, setAddress }) => {
  const [newAddress, setNewAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(newAddress);
    setModel(false);
  };
  return (
    <div className="w-full bg-white max-w-[500px] border rounded-lg shadow-lg p-7">
      <h2 className="text-xl font-black text-center text-red-600 uppercase mb-7">
        Change Your Address
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setNewAddress(e.target.value)}
          className="w-full p-3 border outline-none placeholder:text-gray-600 "
          type="text"
          placeholder="type....."
          required
        />
        <div className="flex justify-between mt-7">
          <button
            onClick={() => {
              setModel(false);
            }}
            className="px-4 py-2 font-bold uppercase rounded-lg bg-gradient-to-l from-yellow-200 to-red-200 "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 font-bold uppercase rounded-lg bg-gradient-to-l from-yellow-200 to-red-200 "
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAddress;
