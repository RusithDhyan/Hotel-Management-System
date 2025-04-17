import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FoodFlavor() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-150">
          <h1 className="text-3xl">Essence of Malawian Flavors</h1>
          <p className="text-center">
            Heritage Hotel’s dining experience revolves around our elegant
            open-air restaurant and bar, offering a refined à la carte selection
            of Sri Lankan and international cuisine, all set against the
            backdrop of our tranquil gardens.
          </p>
        <Link href="/" className="text-sm lg:text-lg md:text-md">
          <button className="relative group text-black py-1 px-2">
            Explore
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </button>
        </Link>
        </div>
      <div className="flex flex-row items-center justify-center gap-10 py-10 px-10">
        <Image
          src="/hotels/bamboo-boutique/foods/food-img1.jpeg"
          alt="food-img1"
          width={1000}
          height={100}
          className="w-80 h-80 object-cover"
        />
        <Image
          src="/hotels/bamboo-boutique/foods/food-img2.jpeg"
          alt="food-img2"
          width={1000}
          height={100}
          className="w-80 h-80 object-cover"
        />
        <Image
          src="/hotels/bamboo-boutique/foods/food-img3.jpeg"
          alt="food-img3"
          width={1000}
          height={100}
          className="w-80 h-80 object-cover"
        />
      </div>
    </div>
  );
}
