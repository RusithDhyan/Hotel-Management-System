import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FoodFlavor() {
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
        <Link href="/hotels/blue-waters/dining" className="text-sm lg:text-lg md:text-md mt-4">
          <button className="relative group text-black py-1 px-2">
            Explore
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-3 py-10 w-full">
        <Image
          src="/hotels/blue-waters/foods/food-img1.jpeg"
          alt="food-img1"
          width={1000}
          height={100}
          className="w-full sm:w-64 md:w-80 h-64 md:h-80 object-cover"
        />
        <Image
          src="/hotels/blue-waters/foods/food-img2.jpeg"
          alt="food-img2"
          width={1000}
          height={100}
          className="w-full sm:w-64 md:w-80 h-64 md:h-80 object-cover"
        />
        <Image
          src="/hotels/blue-waters/foods/food-img3.jpeg"
          alt="food-img3"
          width={1000}
          height={100}
          className="w-full sm:w-64 md:w-80 h-64 md:h-80 object-cover"
        />
      </div>
    </div>
  );
}
