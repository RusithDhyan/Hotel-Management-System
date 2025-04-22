import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Accommodation() {
  const rooms = [
    {
      nav: "executive-suite",
      image: "/hotels/accommodations/executive.jpg",
      title: "Executive Suite",
      size: "32 sqm",
      description:
        "Tailored for business travelers and modern professionals, our Executive Room offers a refined and productive environment.",
      features: [
        "/icons/rooms/item1.png",
        "/icons/rooms/item2.png",
        "/icons/rooms/item3.png",
        "/icons/rooms/item4.png",
        "/icons/rooms/item5.png",
      ],
    },
    {
      nav: "family-twin",
      image: "/hotels/accommodations/family.jpg",
      title: "Family Twin Room",
      size: "35 sqm",
      description:
        "Created with families in mind, our Family Room provides the perfect balance of space, comfort, and practicality.",
      features: [
        "/icons/rooms/item1.png",
        "/icons/rooms/item2.png",
        "/icons/rooms/item3.png",
        "/icons/rooms/item4.png",
        "/icons/rooms/item5.png",
      ],
    },
    {
      nav: "delux-king",
      image: "/hotels/accommodations/deluxe.jpg",
      title: "Delux King Room",
      size: "40 sqm",
      description:
        "Step into comfort and style with our Deluxe Room, thoughtfully designed to provide a serene escape for both leisure and business travelers.",
      features: [
        "/icons/rooms/item1.png",
        "/icons/rooms/item2.png",
        "/icons/rooms/item3.png",
        "/icons/rooms/item4.png",
        "/icons/rooms/item5.png",
      ],
    },
    {
      nav: "premier",
      image: "/hotels/accommodations/premier.jpeg",
      title: "Premier Heritage Suite",
      size: "50 sqm",
      description:
        "Indulge in elevated comfort with our elegant Premium Room, designed for discerning guests who seek a little more from their stay.",
      features: [
        "/icons/rooms/item1.png",
        "/icons/rooms/item2.png",
        "/icons/rooms/item3.png",
        "/icons/rooms/item4.png",
        "/icons/rooms/item5.png",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="w-full h-auto relative group">
        <Image
          src="/hotels/heritage/accommodations/home-bg.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover w-full h-[200px] md:h-[300px] lg:h-[400px]"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-white font-bold pb-4">
          Accommodation
        </h1>
      </div>

      {/* Description */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 md:px-16 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Heritage Hotel Accommodation – Experience Comfort and Luxury
        </h1>
        <p className="font-extralight text-sm md:text-base max-w-4xl">
          Step into a world of comfort and elegance at Heritage Hotel. Our
          luxurious accommodations offer a perfect blend of modern amenities and
          traditional charm, designed to provide you with a restful and
          memorable stay. Whether you're here for a short getaway or an extended
          retreat, our rooms cater to every need with spacious layouts, stunning
          views, and top-tier services.
        </p>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-10">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white shadow-lg overflow-hidden relative group transition-all duration-300"
          >
            {/* Room Image */}
            <Image
              src={room.image}
              alt={room.title}
              width={600}
              height={400}
              className="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay Info */}
            <div className="p-4 absolute inset-0 bg-white/40 backdrop-blur-sm bg-opacity-10 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 overflow-y-auto">
              <h2 className="text-lg md:text-xl font-semibold">
                {room.title}
              </h2>
              <h3 className="text-gray-600 text-sm md:text-base">
                Room Size: {room.size}
              </h3>

              <div className="flex flex-wrap items-center py-2 gap-2">
                {room.features.map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Image
                      src={item}
                      alt="feature"
                      width={20}
                      height={20}
                      className="w-5"
                    />
                  </div>
                ))}
              </div>

              <p className="text-sm md:text-base my-2">{room.description}</p>

              <Link
                href={`/hotels/heritage-hotel/accommodations/${room.nav}`}
                className="text-white font-semibold hover:text-[#FF741E] duration-300 text-sm md:text-base"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
