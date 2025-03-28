import Image from "next/image";
import React from "react";
import OurStory from "./OurStory";
import Services from "./Services";
import PhotSlider from "./PhotSlider";
import Link from "next/link";

export default function Card() {
  return (
    <div>
      <div className="bg-green-400 flex-1 relative">
        <Image
          src="/images/spl1.jpg"
          alt="background image"
          width={1500}
          height={100}
        />
        <div className="absolute inset-0 flex items-end justify-center sm:pb-10 lg:pb-10 md:pb-10">
          <h1 className=" text-center text-sm lg:text-5xl md:text-2xl text-white">
            Relax, Unwind & Experience Luxury
            <br />
            in the Heart of Malawi{" "}
          </h1>
        </div>
      </div>
      <div className="bg-amber-300 h-50 mt-10 w-full p-3">
        <h1 className="text-center text-sm lg:text-4xl md:text-2xl">
          Eco Luxury Escape
        </h1>
      </div>
      <div className="bg-amber-300 h-50 mt-10 w-full p-3">
        <h1 className="text-center text-sm lg:text-4xl md:text-2xl">
          Find Your Place
        </h1>
      </div>
      <div className="h-auto mt-10 w-full p-10 flex flex-row items-center justify-around">
        <div className="flex flex-col items-left gap-5">
          <h1 className=" text-sm lg:text-4xl md:text-2xl">
            Explore Malawi...
          </h1>
          <p>
            Malawi is a landlocked country in southeastern Africa, bordered by
            Tanzania,
            <br /> Mozambique, and Zambia. It is known as the "Warm Heart of
            Africa" due to the <br /> friendliness of its people. The country
            features stunning landscapes,
            <br /> including Lake Malawi, one of Africa’s largest and most
            biodiverse lakes,
            <br /> which offers pristine beaches, water activities, and
            wildlife.
          </p>
        </div>
        <div>
          <Image src="/images/map2.png" width={350} height={10} />
        </div>
      </div>
      <div className=" h-auto flex flex-row items-center justify-left w-full px-10 gap-5">
        <Image src="/images/elephant.jpeg" width={500} height={100} />
        <div className="flex flex-col items-left gap-2">
          <h1 className=" text-sm lg:text-4xl md:text-2xl">
            Lakeside Adventure
          </h1>
          <p>
            Handpicked adventures Nestled in the heart of Lake Malawi, the
            islands of Likoma and Chizumulu offer a secluded paradise filled
            with crystal-clear waters, sandy beaches, and vibrant marine life.
            Unlike the bustling mainland, these islands provide an intimate and
            laid-back experience, perfect for relaxation and adventure. As you
            arrive, whether by boat or a small charter plane, you’ll be greeted
            by warm Malawian hospitality and breathtaking views of the
            shimmering lake stretching to the horizon. The gentle lapping of
            waves against the shore sets the tone for a peaceful escape. vibrant
            spirit and breathtaking beauty
          </p>
          <Link href="/" className="text-xl">
            Discover
          </Link>
        </div>
      </div>
      <Services />
      <PhotSlider />
      <OurStory />
    </div>
  );
}
