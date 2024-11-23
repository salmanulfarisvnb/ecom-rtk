import React, { useEffect } from "react";
import { Categories } from "../assets/mockData";
import { assests } from "../assets/images";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from "../redux/productSlice"
import {mockData} from "../assets/assets"
import Shop from "./Shop";


const Home = () => {
  const dispatch = useDispatch();
  const {products}= useSelector((state)=>state.product);

  useEffect(()=>{
    dispatch(setProducts(mockData))
  },[])

 

  return (
    <div className="w-full p-4 mx-auto md:p-8 xl:p-12">
      <div className="container flex flex-col items-center justify-center py-4 mx-auto gap-x-2 md:items-start md:flex-row">
        <div className="w-full md:w-3/12">
          {" "}
          <div className="px-2 text-xs py-2.5 font-bold text-white bg-red-600 ">
            SHOP BY CATEGORIES
          </div>
          <ul className="p-3 space-y-3 font-medium bg-gray-100 border md:font-normal md:">
            {Categories.map((item, index) => (
              <li className="flex items-center pl-2 cursor-pointer group gap-x-2 " key={index}>
                <div className="border group-hover:bg-red-500  border-red-500 rounded-full size-2.5"></div>{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full mt-8 md:w-9/12 md:mt-0">
          {" "}
          <img className=" size-full md:h-[500px]" src={assests.Hero} alt="" />
          <div className="absolute space-y-3 top-6 left-6 ">
            <p className="text-sm text-gray-800 ">CODE WITH SALMAN</p>
            <p className="text-2xl font-semibold text-gray-800 ">
              WELCOME TO E-SHOP
            </p>
            <p className="font-semibold text-gray-800 "> MILLIONS + PRODUCTS</p>
            <button
              className="px-4 py-2 font-semibold transition-transform duration-300 transform border border-white rounded-md hover:translate-x-1 te xt-lg hover:border-none hover:ring-2 bg-gradient-to-l from-green-300 to-red-300"
              type="button"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
        <InfoSection />
        <CategorySection/>
        <div className="container py-12 mx-auto ">
          <h2 className="text-xl font-bold text-center mb-7">Top Product</h2><div className="grid gap-3 grid-rows-1-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
           {products.slice(0,5).map((item,index)=>(
            <ProductCard key={index} products={item} />
           ))}
          </div>
        </div>  
        <div>
          <Shop/>
        </div>
    </div>
  );
};

export default Home;
