import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Accommodation() {
  const rooms = [
    {
      nav: "executive-suite",
      image: "/hotels/kara-o-mula/accommodations/executive.jpeg",
      title: "Executive Suite",
      size: "32 sqm",
      description:
        "Tailored for business travelers and modern professionals, our Executive Room offers a refined and productive environment. Featuring a comfortable king-size bed, high-speed Wi-Fi, and an ergonomic workstation, the space is perfect for those who need to work and relax in equal measure.",
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
      image: "/hotels/kara-o-mula/accommodations/family.jpeg",
      title: "Family Twin Room",
      size: "35 sqm",
      description:
        "Created with families in mind, our Family Room provides the perfect balance of space, comfort, and practicality. With a king-size bed for parents and a set of bunk beds or a pull-out sofa for children, the room ensures everyone sleeps soundly. The layout is open yet cozy, with enough space for kids to play and adults to relax. ",
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
      image: "/hotels/kara-o-mula/accommodations/deluxe.jpeg",
      title: "Delux King Room",
      size: "40 sqm",
      description:
        "Step into comfort and style with our Deluxe Room, thoughtfully designed to provide a serene escape for both leisure and business travelers. This spacious room features elegant interiors, modern amenities, and large windows that allow in plenty of natural light.",
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
      image: "/hotels/kara-o-mula/accommodations/premier.jpeg",
      title: "Premier Heritage Suite",
      size: "50 sqm",
      description:
        "Indulge in elevated comfort with our elegant Premium Room, designed for discerning guests who seek a little more from their stay. This refined space blends sophisticated design with warm, inviting tones to create an atmosphere of modern luxury.",
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
      <div className="w-full h-auto  relative group">
        <Image
          src="/hotels/heritage/accommodations/home-bg.jpg"
          alt="background"
          width={1500}
          height={100}
          className="object-cover h-100"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-white pb-4">
          Accommodation
        </h1>
      </div>
      <div className="text-center mt-10 px-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
        Kara O Mula Accommodation – Experience Comfort and Luxury
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
        Step into a world of comfort and elegance at Bamboo Boutique Hotel. Our
          luxurious accommodations offer a perfect blend of modern amenities and
          traditional charm. Whether it's a short getaway or an extended retreat,
          our rooms ensure relaxation, stunning views, and premium service.        </p>
      </div>
      <ddiv className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-10">
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
                href={`/hotels/kara-o-mula/accommodations/${room.nav}`}
                className="inline-block mt-2 text-blue-600 hover:text-orange-500 transition-colors text-sm font-semibold"
              >
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </ddiv>

    </div>
  );
}
