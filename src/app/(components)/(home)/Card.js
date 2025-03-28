import Image from "next/image";
import React from "react";
import OurStory from "./OurStory";
import Services from "./Services";
import PhotSlider from "./PhotSlider";
import Link from "next/link";
import HomeSlider from "./HomeSlider";

export default function Card() {
  return (
    <div>
      {/* <div className="bg-green-400 flex-1 relative">
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
      </div> */}
      <HomeSlider/>
      <div className="h-auto mt-10 w-full px-10 flex flex-col lg:flex-row items-center gap-3">
        <Image
          src="/images/Malawi.jpeg"
          width={700}
          height={1000}
          className="sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-130 lg:h-130"
        />
        <div className="flex flex-col gap-3 text-xs lg:text-lg md:text-md">
          <h1 className="text-xl lg:text-4xl md:text-3xl">
            Eco Luxury Escapes <br /> in Malawi
          </h1>
          <p>
            We are a renowned collection of charming boutique hotels and serene
            tea bungalows, offering a blend of sophisticated yet laid-back
            luxury experiences across Malawi. Each of our 7 hotels boasts its
            own unique character and narrative, while sharing a common
            dedication to preserving historic landmarks, protecting the
            environment, celebrating the rich local culture, and showcasing
            Malawi’s extraordinary natural beauty and vibrant local cuisine.
          </p>
          <Link href="/about" className="text-sm lg:text-lg md:text-md">Read more</Link>
          <div className="flex flex-col md:flex-row items-center gap-3 mt-3 ">
            <Image src="/images/home1.jpeg" width={250} height={20} className="sm:w-25 sm:h-25 md:w-35 md:h-35 lg:w-50 lg:h-50"/>
            <Image src="/images/home2.jpeg" width={250} height={20} className="sm:w-25 sm:h-25 md:w-35 md:h-35 lg:w-50 lg:h-50"/>
            <Image src="/images/home3.jpg" width={250} height={20} className="sm:w-25 sm:h-25 md:w-35 md:h-35 lg:w-50 lg:h-50"/>

          </div>
        </div>
      </div>
      <div className="bg-amber-300 h-50 mt-10 w-full p-3">
        <h1 className="text-center text-xl lg:text-4xl md:text-3xl">
          Find Your Place
        </h1>
      </div>
      <div className="h-auto mt-10 w-full p-2 lg:p-10 flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-col items-left gap-5 text-xs lg:text-lg md:text-md">
          <h1 className="text-xl lg:text-4xl md:text-3xl">
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
      <div className=" h-auto flex flex-col md:flex-row items-center w-full px-2 lg:px-10 gap-5">
        <Image src="/images/elephant.jpeg" width={500} height={100} />
        <div className="flex flex-col items-left gap-2 text-xs lg:text-lg md:text-md">
          <h1 className="text-xl lg:text-4xl md:text-3xl">
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
          <Link href="/" className="text-sm lg:text-lg md:text-md">
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
