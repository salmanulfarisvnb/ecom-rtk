import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-[-5rem] z-10 bg-white shadow-md ">
      <div className="container flex items-center justify-between p-4 mx-auto xl:p-12">
        <div className="text-xl font-bold ">
          <Link to={"/"}>e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4 ">
          <form>
            <input
              className="w-full px-4 py-2 border "
              type="text"
              placeholder="Search Product"
            />
            <FaSearch className="absolute text-red-500 top-3 right-3"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4 ">
          <Link to={"cart"}>
            <FaShoppingCart className="text-lg " />
          </Link>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser className="text-lg " />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 text-sm font-semibold space-x-7">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"shop"}>Shop</NavLink>
        <NavLink to={"contact"}>Contact</NavLink>
        <NavLink to={"about"}>About</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
