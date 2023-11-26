import { ShoppingBag } from 'lucide-react';
import React from 'react'
import { products } from '@/utils/mock';

const Cart = () => {
  return (
    <div className="px-10 mx-4 lg:mx-16 my-16 pt-32 lg:px-32">
        <div className="text-2xl font-bold text-black ">
            Shopping Cart
        </div>
        <div className="mt-8 gap-16 ">
            <div className="flex flex-col justify-center items-center">
            <ShoppingBag className="w-16 h-16 lg:w-40 lg:h-40 text-black"/>
            <h1 className="text-lg lg:text-3xl font-bold text-black">Your shopping bag is empty</h1>
            </div>
        </div>
        <div>

          If Cart has any item, then hide Empty Cart. And show what is below. If Cart has no item, then show what is above.

        </div>
        <div>
          <h1>Cart</h1>
          <div>
            <div>Item is</div>
            <div>Image of item</div>
            <div>Item Name</div>
            <div>Item Details</div>
            <div>Item Size</div>
            <div>Checkout</div>
          </div>
        </div>
    </div>
  )
}

export default Cart;