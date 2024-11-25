import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { setProducts } from '../redux/productSlice';
import { mockData } from '../assets/assets';

const Shop = () => {
  const {products} = useSelector(state=>state.product)
  const dispatch = useDispatch();

    dispatch(setProducts(mockData));

 
  return (
    <div className="container py-12 mx-auto ">
      <h2 className="text-xl font-bold text-center mb-7">Shop</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {products.slice(0,10).map((item, index) => (
          <ProductCard key={index} products={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop