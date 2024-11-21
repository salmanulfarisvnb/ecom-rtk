import React, { useEffect } from 'react'
import manCategorey from "../assets/images/man-cat.png"
import womemCat from "../assets/images/women-cat.png"
import kidCat from "../assets/images/kid-cat.png";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
 import { mockData } from '../assets/assets';


const CategorySection = () => {

  const dispatch = useDispatch()
  const  {products} = useSelector(state=>state.product)
  useEffect(()=>{
    dispatch(setProducts(mockData))
  },[])
    const section = [
      {
        
        title: "Men",
        uri: manCategorey
      },
      {
       
        title: "Women",
       uri: womemCat
      },
      {
        
        title: "Kids",
        uri: kidCat
      },
      
    ];

    console.log(products);
    
    
  return (
    <div className="container max-w-[1100px] grid gap-6 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3">
      {section.map((item, index) => (
        <div
          className="relative overflow-hidden transition-transform duration-200 transform border rounded-lg hover:scale-105"
          key={index}
        >
          <img className="w-full " src={item.uri} alt="profile" />
          <div className='absolute top-12 left-3'>
            <p className='text-xl font-bold'>{item.title}</p>
            <p className='mt-3 text-base text-gray-600'>View All</p>
          </div>
        </div>
      ))}

      <div></div>
    </div>
  );
}

export default CategorySection