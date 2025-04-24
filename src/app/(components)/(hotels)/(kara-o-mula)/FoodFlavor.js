"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function FoodFlavor() {
  const [isActive, setIsActive] = useState(false);
        
          const activateHover = () => setIsActive(true);
          const deactivateHover = () => setIsActive(false);
  return (
    <div className="mt-10 flex flex-col items-center px-4 sm:px-6 md:px-10">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold">Essence of Malawian Flavors</h1>
        <p className="mt-2 text-sm sm:text-base">
          Heritage Hotel’s dining experience revolves around our elegant
          open-air restaurant and bar, offering a refined à la carte selection
          of Sri Lankan and international cuisine, all set against the
          backdrop of our tranquil gardens.
        </p>
        <Link href="/hotels/kara-o-mula/dining" className="text-sm lg:text-lg md:text-md mt-4">
        <button
                className="relative text-black py-1 px-2 border-b-2 border-transparent"
                onMouseEnter={activateHover}
                onMouseLeave={deactivateHover}
                onTouchStart={activateHover}
                onTouchEnd={deactivateHover}
              >
                Explore
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-10"
                  }`}
                ></span>
              </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-3 py-10 w-full">
        <Image
          src="/hotels/kara-o-mula/foods/food-img1.jpeg"
          alt="food-img1"
          width={1000}
          height={100}
          className="w-full sm:w-64 md:w-80 h-64 md:h-80 object-cover"
        />
        <Image
          src="/hotels/kara-o-mula/foods/food-img2.jpeg"
          alt="food-img2"
          width={1000}
          height={100}
          className="w-full sm:w-64 md:w-80 h-64 md:h-80 object-cover"
        />
        <Image
          src="/hotels/kara-o-mula/foods/food-img3.jpeg"
          alt="food-img3"
          width={1000}
          height={100}
          className="w-full sm:w-64 md:w-80 h-64 md:h-80 object-cover"
        />
      </div>
    </div>
  );
}
