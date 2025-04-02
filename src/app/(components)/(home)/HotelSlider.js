"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    image: "/hotels/h1.jpeg",
    title: "Blue Waters Lake Resort",
    location: "Senga Bay,Salima",
    description:
      "Our hotel offers a relaxing stay with modern amenities, warm hospitality, and a beautiful setting in Malawi.Enjoy a peaceful retreat with stunning views, cozy rooms, and a welcoming atmosphere in the heart of Africa",
  },
  {
    id: 2,
    image: "/hotels/h2.jpeg",
    title: "Le Oroissant",
    location: "Limbe,Blantyre",
    description:
      "Le Croissant Patisserie is located within the Heritage by Serendib hotel on Milward Road in Limbe, Blantyre, Malawi.  This patisserie offers a taste of France, allowing guests to sip on a cup of Malawian tea while savoring freshly baked French baguettes and a selection of gourmet pastries.",
  },
  {
    id: 3,
    image: "/hotels/h3.jpeg",
    title: "hotel Three",
    location: "Senga Bay,Salima",
    description: "An escape from the city.",
  },
  {
    id: 4,
    image: "/hotels/h4.jpeg",
    title: "hotel Four",
    location: "Senga Bay,Salima",
    description: "Perfect for a family vacation.",
  },
  {
    id: 5,
    image: "/hotels/h5.jpeg",
    title: "hotel Five",
    location: "Senga Bay,Salima",
    description: "A stunning beachside retreat.",
  },
  {
    id: 6,
    image: "/hotels/h6.jpeg",
    title: "hotel Six",
    location: "Senga Bay,Salima",
    description: "Experience nature at its best.",
  },
  {
    id: 7,
    image: "/hotels/h7.jpeg",
    title: "hotel Seven",
    location: "Senga Bay,Salima",
    description: "A budget-friendly stay.",
  },
  {
    id: 8,
    image: "/hotels/h8.jpeg",
    title: "hotel Eight",
    location: "Senga Bay,Salima",
    description: "Unparalleled luxury.",
  },
  {
    id: 9,
    image: "/hotels/h9.jpeg",
    title: "hotel Nine",
    location: "Senga Bay,Salima",
    description: "A peaceful getaway.",
  },
  {
    id: 10,
    image: "/hotels/h10.jpeg",
    title: "Hotel Ten",
    location: "Senga Bay,Salima",
    description: "A blend of tradition and modernity.",
  },
];

export default function HotelSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % hotels.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
  };

  return (
    <div>
      <h1 className="text-center text-xl lg:text-4xl md:text-3xl">
        Find Your Place
      </h1>
      <div>
        <Link
          href="/our-collections"
          className="items-center justify-center flex text-sm lg:text-lg md:text-md"
        >
          <button className="relative group text-gray-400 py-2 px-4 border-b-2 border-transparent">
            View more
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-gray-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        </Link>
      </div>
      <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden p-4">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 33.33}%)` }}
        >
          {hotels.map((hotel, i) => (
            <div
              key={hotel.id}
              className={`flex-shrink-0 w-[33.33%] p-2 transition-all duration-500 ${
                i === index ? "scale-110 w-[50%]" : "scale-90 w-[25%]"
              }`}
            >
              <div className="bg-white ">
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-80 object-cover"
                  width={1000}
                  height={100}
                />
                <div className={`p-2 ${i === index ? "h-30" : "h-auto"}`}>
                  <h3 className="text-lg font-semibold">{hotel.title}</h3>
                  <h4 className="text-gray-400">{hotel.location}</h4>
                  {i === index && (
                    <p className="text-sm">{hotel.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center justify-end gap-10 my-2">
          <button onClick={prevSlide} className="text-gray-500">
            <CircleArrowLeft size={30} />
          </button>
          <h5></h5>
          <button onClick={nextSlide} className="text-gray-500">
            <CircleArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
