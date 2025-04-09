import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Accommodation() {

  const rooms=[
    {
      nav:"executive-suite",
      image: "/hotels/accommodations/executive.jpg",
      title: "Executive Suite",
      size:"32 sqm",
      description: "Enjoy breathtaking sunsets over Lake Malawi in ultimate luxury.",
    },
    {
      nav:"family-twin",
      image: "/hotels/accommodations/family.jpg",
      title: "Family Twin Room",
      size:"35 sqm",
      description: "A tranquil escape nestled in the highlands, perfect for relaxation.",
    },
    {
      nav:"delux-king",
      image: "/hotels/accommodations/deluxe.jpg",
      title: "Delux King Room",
      size:"40 sqm",
      description: "Experience the charm of historic tea plantations in a cozy setting.",
    },
    {
      nav:"premier",
      image: "/hotels/accommodations/premier.jpeg",
      title: "Premier Heritage Suite",
      size:"50 sqm",
      description: "Step onto pristine sands and embrace the soothing waves of the lake.",
    },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/hotels/heritage/accommodations/bg1.png"
          alt=""
          width={1500}
          height={100}
          className="object-cover max-h-screen"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-white pb-4">
          Accommodation
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-50">
        <h1 className="text-2xl">
          Heritage Hotel Accommodation – Experience Comfort and Luxury
        </h1>
        <p className="font-extralight">
          Step into a world of comfort and elegance at Heritage Hotel. Our
          luxurious accommodations offer a perfect blend of modern amenities and
          traditional charm, designed to provide you with a restful and
          memorable stay. Whether you're here for a short getaway or an extended
          retreat, our rooms cater to every need with spacious layouts, stunning
          views, and top-tier services. Explore our range of rooms and suites,
          each crafted to ensure relaxation, convenience, and a sense of home
          away from home.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
        {rooms.map((room,index) => (
          <div
            key={room.index}
            className="bg-white shadow-lg overflow-hidden relative group"
          >
      
            <Image
              src={room.image}
              alt={room.title}
              width={600}
              height={400}
              className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4 absolute inset-0 bg-white/40 backdrop-blur-sm bg-opacity-10 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              <h2 className="text-xl font-semibold">{room.title}</h2>
              <h3 className="text-gray-600">Room Size:{room.size}</h3>
              <h3 className="text-gray-600">{room.location}</h3>
              <p className=" mt-2">{room.description}</p>
              <Link href={`/hotels/heritage-hotel/accommodations/${room.nav}`} className="text-white font-semibold">
             Learn more
            </Link>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}
