"use client"
import React from 'react'
import { Button } from './button'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/slice/cartSlice'
import toast from 'react-hot-toast';

const AddToCart = () => {
    const dispatch=useDispatch();
    const addItem=()=>{
        dispatch(cartActions.addToCart({quantity:1}))
        toast.success("Product Added Successfully!")
    };
  return (
    <div><Button className="rounded-none bg-[#212121] items-center text-white hover:bg-[#212121] hover:text-white"
    variant="outline" onClick={addItem}>Add To Cart</Button></div>
  )
}

export default AddToCart