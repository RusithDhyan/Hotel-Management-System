import Image from "next/image";
import React from "react";
import OurStory from "../(components)/(home)/OurStory";
import ServiceCardSlider from "../(components)/(home)/ServiceCardSlider";
import PhotSlider from "../(components)/(home)/PhotSlider";
import Link from "next/link";
import HomeSlider from "../(components)/(home)/HomeSlider";
import HotelNav from "../(components)/(home)/HotelNav";

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <div className="h-auto mt-10 w-full px-10 flex flex-col lg:flex-row items-center gap-2">
        <Image
          src="/images/home3.jpg"
          alt="card-image1"
          width={700}
          height={1000}
          className="sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-120 lg:h-130 object-fill"
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
          <div>
            <Link href="/about" className="text-sm lg:text-lg md:text-md">
              Read more
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Image
              src="/images/home1.jpeg"
              alt="card-image2"
              width={250}
              height={20}
              className="sm:w-25 sm:h-25 md:w-35 md:h-35 lg:w-60 lg:h-60 object-fill"
            />
            <Image
              src="/images/home2.jpeg"
              alt="card-image2"
              width={250}
              height={20}
              className="sm:w-25 sm:h-25 md:w-35 md:h-35 lg:w-60 lg:h-60 object-fill"
            />
            <Image
              src="/images/Malawi.jpeg"
              alt="card-image2"
              width={250}
              height={20}
              className="sm:w-25 sm:h-25 md:w-35 md:h-35 lg:w-60 lg:h-60 object-fill"
            />
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
          <h1 className="text-xl lg:text-4xl md:text-3xl">Explore Malawi...</h1>
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
        <div className="flex relative items-center justify-center overflow-hidden group">
          <Image
            src="/images/map2.png"
            alt="card-image2"
            width={350}
            height={10}
            className="object-cover transition-transform duration-500 group-hover:scale-140"
          />
          <HotelNav />
        </div>
      </div>
      <div className=" h-auto flex flex-col md:flex-row items-center w-full px-2 lg:px-10 gap-5">
        <Image
          src="/images/elephant.jpeg"
          alt="card-image2"
          width={500}
          height={100}
        />
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
          <div>
            <Link href="/" className="text-sm lg:text-lg md:text-md">
              <button className="relative group text-black py-2 px-4 border-b-2 border-transparent">
                Discover
                <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ServiceCardSlider />
      <PhotSlider />
      <OurStory />
    </div>
  );
}
