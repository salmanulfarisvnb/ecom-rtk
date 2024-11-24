import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../assets/images/empty-cart.png";
import { FaRupeeSign, FaTrash } from "react-icons/fa";
import Model from "./Model";
import CreateAddress from "./CreateAddress";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { totalPrice } = useSelector((state) => state.cart);
  const [address, setAddress] = useState("calicut po");
  const [model, setModel] = useState(false);

  return (
    <div>
      <div className="flex justify-center p-5 ">
        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2 " src={emptyCart} alt="" />
            <h3 className="text-2xl font-semibold text-red-600 mt-7">
              Your cart item is empty{" "}
            </h3>
            <p className="mt-2 text-gray-600 ">
              {" "}
              Add something to makes me happy
            </p>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div
          className={`container p-5 mx-auto ${
            cart.length < 4 ? "mb-60" : "pb-10"
          }`}
        >
          {" "}
          <h1 className="text-xl font-bold uppercase max-sm:text-center">
            shopping cart
          </h1>
          <div className="flex flex-col items-center justify-between sm:items-start gap-y-7 md:flex-row mt-7">
            <div className="flex items-center justify-center sm:hidden">
              {cart.map((item, index) => (
                <div className=" p-5 w-full max-w-[300px]" key={index}>
                  <img
                    className="object-contain size-[200px] w-full"
                    src={item.image}
                    alt=""
                  />
                  <p className="m-3 font-semibold">{item.name}</p>
                  <div className="flex justify-center gap-3 mb-3">
                    <p>Quantity :</p>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(decreaseCartQuantity({ id: item._id }))
                      }
                      className="px-2 py-0 border active:bg-red-300"
                    >
                      -
                    </button>
                    <p className="inline "> {item.quantity}</p>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(increaseCartQuantity({ id: item._id }))
                      }
                      className="px-2 py-0 border active:bg-red-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      price :{" "}
                      <span>
                        <FaRupeeSign className="inline" />
                        {item.price}
                      </span>
                    </p>
                    <p>
                      SubTotal:{" "}
                      <span>
                        {" "}
                        <FaRupeeSign className="inline" />
                        {item.price * item.quantity}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end mt-3">
                    <p
                      onClick={() =>
                        dispatch(
                          removeFromCart({
                            id: item._id,
                            price: item.price,
                            quantity: item.quantity,
                          })
                        )
                      }
                      className="px-2 py-1 text-white transition-transform transform bg-red-400 rounded-lg cursor-pointer hover:ring-1 ring-blue-600 active:scale-95"
                    >
                      Delete
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 hidden sm:block ">
              {" "}
              <table className="w-full table-auto ">
                <thead>
                  <tr className="text-sm text-center border-b ">
                    <th className="p-2 mr-3 ">PRODUCT</th>
                    <th className="">PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                    <th className=" text-start">REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="text-center border-b ">
                      <td className="flex items-center text-sm font-semibold  w-[200px] gap-3 p-3 ">
                        <img className="size-12" src={item.image} alt="" />
                        <p>{item.name}</p>
                      </td>
                      <td className="text-sm font-semibold ">
                        <FaRupeeSign className="inline m-1" />
                        {item.price}
                      </td>
                      <td className="">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(decreaseCartQuantity({ id: item._id }))
                          }
                          className="px-2 py-0 border active:bg-red-300"
                        >
                          -
                        </button>
                        <p className="inline "> {item.quantity}</p>
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(increaseCartQuantity({ id: item._id }))
                          }
                          className="px-2 py-0 border active:bg-red-300"
                        >
                          +
                        </button>
                      </td>
                      <td className="text-sm font-semibold ">
                        <FaRupeeSign className="inline m-1" />
                        {item.price * item.quantity.toFixed()}
                      </td>
                      <td className="text-red-500 text-start">
                        <FaTrash
                          className="cursor-pointer "
                          onClick={() =>
                            dispatch(
                              removeFromCart({
                                id: item._id,
                                price: item.price,
                                quantity: item.quantity,
                              })
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full max-w-[350px] lg:p-7 p-4 mt-2 ml-5 border rounded-lg shadow-md ">
              <p className="text-sm font-medium uppercase">cart totals</p>
              <div className="flex items-center justify-between w-full mt-2">
                <p className="text-xs font-medium text-gray-500 uppercase">
                  total items:
                </p>
                <p className="text-xs font-medium">{cart.length}</p>
              </div>
              <hr className="my-3 " />
              <p className="my-2 text-sm ">Shipping:</p>
              <p className="text-xs font-medium">
                Shipping to:{" "}
                <span className="text-xs text-gray-600">{address}</span>{" "}
              </p>
              <p
                onClick={() => setModel(true)}
                className="my-2 text-xs text-blue-500 cursor-pointer hover:underline "
              >
                Change Address
              </p>
              <hr />
              <div className="flex justify-between text-xs font-medium ">
                <p>Total price</p>
                <p className="inline-flex items-center ">
                  <FaRupeeSign /> {totalPrice}
                </p>
              </div>
              <div className="flex items-center justify-center mt-5">
                <button className="p-3 font-bold text-white uppercase transition-transform transform bg-red-500 border rounded-lg hover:ring-1 ring-black active:scale-95">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
          <Model model={model} setModel={setModel}>
            <CreateAddress
              model={model}
              setModel={setModel}
              setAddress={setAddress}
            />
          </Model>
        </div>
      )}
    </div>
  );
};

export default Cart;
