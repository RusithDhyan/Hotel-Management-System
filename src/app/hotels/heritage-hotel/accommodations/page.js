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
      nav: "deluxe-king",
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
      <div className="text-center mt-10 px-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
        Heritage Hotel Accommodation – Experience Comfort and Luxury
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
        Step into a world of comfort and elegance at Heritage Hotel. Our
          luxurious accommodations offer a perfect blend of modern amenities and
          traditional charm, designed to provide you with a restful and
          memorable stay. Whether you're here for a short getaway or an extended
          retreat, our rooms cater to every need with spacious layouts, stunning
          views, and top-tier services.      </p>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-10">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md overflow-hidden group min-h-[300px]"
          >
            <Image
              src={room.image}
              alt={room.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{room.title}</h3>
              <p className="text-sm text-gray-600">Room Size: {room.size}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {room.features.map((icon, idx) => (
                  <Image
                    key={idx}
                    src={icon}
                    alt="feature"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700">{room.description}</p>
              <Link
                href={`/hotels/heritage-hotel/accommodations/${room.nav}`}
                className="inline-block mt-2 text-blue-600 hover:text-orange-500 transition-colors text-sm font-semibold"
              >
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
