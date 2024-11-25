import React from "react";

const Register = ({ setLogin }) => {
  return (
    <div className="p-4 bg-white w-full border rounded-md max-w-[400px]">
      <h1 className="text-xl font-black">Sign Up</h1>
      <form>
        <div class="my-4">
          <label class="text-gray-500 peer-focus:text-red-500" htmlFor="email">
            Email
          </label>
          <br />
          <input
            id="text"
            class="w-full hover:ring-2 p-2 border rounded-md outline-none peer"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div class="my-4">
          <label class="text-gray-500 peer-focus:text-red-500" htmlFor="email">
            Email
          </label>
          <br />
          <input
            id="email"
            class="w-full hover:ring-2 p-2 border rounded-md outline-none peer"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div class="my-4">
          <label class="text-gray-500 peer-focus:text-red-500" htmlFor="email">
            Email
          </label>
          <br />
          <input
            id="email"
            class="w-full hover:ring-2 p-2 border rounded-md outline-none peer"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex justify-between text-sm">
          <p>
            <input className="mr-2" type="checkbox" name="" id="" />
            <span>Remember me</span>
          </p>
          <p className="text-red-600 hover:underline">Forgot password</p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="w-full p-3 text-lg hover:bg-white transition-all font-black hover:text-red-600 hover:ring-2 ring-blue-600 active:text-transparent text-white bg-red-600 rounded-md max-w-[300px]">
            Sign Up
          </button>
        </div>
        <p className="mt-3 text-sm text-center text-gray-600 ">
          Don't have an account?{" "}
          <span
            onClick={() => setLogin(true)}
            className="text-red-400 hover:underline"
          >
            login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
