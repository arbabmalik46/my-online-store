"use client"

import { useState } from "react";
import { products } from "@/utils/mock";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useToast } from "@/components/ui/use-toast"
import AddToCart from "@/components/ui/AddToCart";

type Product = {
  slug: string;
  name: string;
  price: number;
  type: string;
  image: string | StaticImageData;
};

export async function generateStaticParams() {
  return products.map((product: Product) => ({
    params: {
      slug: product.slug,
    },
  }));
}

type ProductDetailProps = {
  params: Product;
};

type Size = "XS" | "S" | "M" | "L" | "XL";

const ProductDetailPage = ({ params }: ProductDetailProps) => {
  const { toast } = useToast()
  const [selectedSize, setSelectedSize] = useState<Size>("XS");
  const [quantity, setQuantity] = useState<number>(1); // Initialize quantity with 1
  const product = products.find((product) => product.slug === params.slug);
  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleSizeClick = (size: Size) => {
    setSelectedSize(size);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  
  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  
  const totalPrice = product.price * quantity;

  return (
    <div className="bg-[#fcfcfc] pb-20">
      <div className="pt-32 px-10 lg:px-32 my-10">
        <div className="flex flex-col lg:flex-row lg:gap-x-6">
          <div className="flex gap-x-6">
            {typeof product.image === "string" ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <Image className="w-24 h-24" src={product.image} alt={product.name} />
            )}
            {typeof product.image === "string" ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <div className="sm: md:block lg:block">
                <Image className="lg:w-auto lg:h-auto" src={product.image} alt={product.name} />
              </div>
            )}
          </div>
          <div className="lg:pl-6">
            <div className="pt-16">
              <div className="flex flex-col font-bold text-3xl">
                {product.name}
                <span className="text-xl font-semibold opacity-40">{product.type}</span>
              </div>
              <div className="flex flex-col space-y-3 py-10">
                <p className="text-sm font-semibold py-2 text-base font-bold">SELECT SIZE</p>
                <div className="flex flex-wrap gap-5">
                  <p
                    className={`w-10 cursor-pointer font-bold rounded-full p-2 text-center ${
                      selectedSize === "XS" ? "bg-[#212121] text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleSizeClick("XS")}
                  >
                    XS
                  </p>
                  <p
                    className={`w-10 cursor-pointer font-bold rounded-full p-2 text-center ${
                      selectedSize === "S" ? "bg-[#212121] text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleSizeClick("S")}
                  >
                    S
                  </p>
                  <p
                    className={`w-10 cursor-pointer font-bold rounded-full p-2 text-center ${
                      selectedSize === "M" ? "bg-[#212121] text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleSizeClick("M")}
                  >
                    M
                  </p>
                  <p
                    className={`w-10 cursor-pointer font-bold rounded-full p-2 text-center ${
                      selectedSize === "L" ? "bg-[#212121] text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleSizeClick("L")}
                  >
                    L
                  </p>
                  <p
                    className={`w-10 cursor-pointer font-bold rounded-full p-2 text-center ${
                      selectedSize === "XL" ? "bg-[#212121] text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleSizeClick("XL")}
                  >
                    XL
                  </p>
                </div>
              </div>
              <div>
                <div className="flex font-bold text-lg items-center">
                  Quantity:
                  <div className="px-8">
                    <button
                      className="text-2xl px-3 py-1 rounded-full border border-gray-300 mr-2"
                      onClick={handleDecreaseQuantity}
                    >
                      −
                    </button>
                    <span className="font-normal mx-1">{quantity}</span>
                    <button
                      className="text-2xl px-3 py-1 rounded-full border border-gray-300 ml-2"
                      onClick={handleIncreaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-8 flex items-center">
                <AddToCart/>
                <div className="font-bold text-2xl px-3 tracking-widest">${totalPrice}.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-32 ">
        <div className="bg-white py-10 lg:px-14">
          <div className=" border-b-2 py-4 border-[#c4c4c4]">
          <div className="relative font-bold text-5xl sm:text-6xl sm:font-bold md:text-8xl md:font-bold lg:font-bold lg:text-9xl text-[#f2f3f7] flex items-center ">Overview
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider text-black absolute">Product Information</div>
          </div>
          </div>
          <div className="pt-10 flex flex-row desc-details">
            <h4 className="text-[#666] tracking-wide basis-1/4 font-bold inline">
              PRODUCT DETAILS
            </h4>
            <p className="text-base ml-4 lg:ml-20 font-light basis-2/3 text-[#212121] text-justify tracking-widest leading-7 inline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="pt-10 desc-details pb-20">
          <div className="flex flex-1 text-[#666] tracking-wide font-bold">
          PRODUCT CARE
          <ul className="list-disc lg:ml-20 sm:ml-4 md:ml-36 lg:ml-52 text-black text-normal tracking-widest text-[#212121]">
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ul>
          </div>
          </div>
          </div>
        </div>
    </div>
    
  );
};

export default ProductDetailPage;
