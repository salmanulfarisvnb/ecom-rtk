import React from 'react'
import { useSelector } from 'react-redux'
import emptyCart from "../assets/images/empty-cart.png"

const Cart = () => {
    const{cart} = useSelector(state=>state.cart)
    
    
  return (
    <div className='flex justify-center p-10 '>
        {cart.length === 0 && (
            <div className='flex flex-col items-center justify-center'>
                <img className='w-1/2 ' src={emptyCart} alt="" />
                <h3 className='text-2xl font-semibold text-red-600 mt-7'>Your cart item is empty </h3>
                <p className='mt-2 text-gray-600 '> Add something to makes me happy</p>
            </div>
        )}
    </div>
  )
}

export default Cart