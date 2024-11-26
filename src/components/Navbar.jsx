import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Model from "./Model";
import Login from "./Login";
import Register from "./Register";
import { filterByFeature } from "../redux/productSlice";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const [model, setModel] = useState(false);
  const [login, setLogin] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearch(e.target.value);

    dispatch(filterByFeature(search));
    navigate("filter-page");
  };
  return (
    <nav className="sticky top-[-5rem] z-10 bg-white shadow-md ">
      <div className="container flex items-center justify-between p-4 mx-auto xl:p-12">
        <div className="text-xl font-bold ">
          <Link to={"/"}>e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4 ">
          <form>
            <input
              onChange={handleSearch}
              className="w-full px-4 py-2 border "
              type="text"
              placeholder="Search Product"
            />
            <FaSearch className="absolute text-red-500 top-3 right-3"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4 text-xl ">
          <Link to={"cart"}>
            <div className="relative ">
              <FaShoppingCart className="text-2xl " />
              {cart.length === 0 ? (
                ""
              ) : (
                <p className="absolute top-[-12px] right-[-8px] flex items-center justify-center text-[10px] font-black bg-yellow-300 rounded-full w-full h-full ">
                  {cart.length}
                </p>
              )}
            </div>
          </Link>
          <button onClick={() => setModel(true)} className="hidden md:block">
            Login | Register
          </button>
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
      <Model model={model} setModel={setModel}>
        {login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        )}
      </Model>
    </nav>
  );
};
export default Navbar;
