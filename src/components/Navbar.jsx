import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-white shadow-md">
      <div className=" container  mx-auto p-4  md:p-8 xl:p-12 flex justify-between items-center">
        <div className=" text-xl font-bold">
          <Link to={"/"}>e-SHOP</Link>
        </div>
        <div className=" relative flex-1 mx-4">
          <form>
            <input
              className=" w-full border py-2 px-4 "
              type="text"
              placeholder="Search Product"
            />
            <FaSearch className=" absolute top-3 right-3 text-red-500"></FaSearch>
          </form>
        </div>
        <div className=" flex items-center space-x-4">
          <Link to={"cart"}>
            <FaShoppingCart className=" text-lg" />
          </Link>
          <button className=" hidden md:block">Login | Register</button>
          <button className=" block md:hidden">
            <FaUser className=" text-lg" />
          </button>
        </div>
      </div>
      <div className=" py-4 text-sm font-semibold flex items-center justify-center space-x-7">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"shop"}>Shop</NavLink>
        <NavLink to={"contact"}>Contact</NavLink>
        <NavLink to={"about"}>About</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
