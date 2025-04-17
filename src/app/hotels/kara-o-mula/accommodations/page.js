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
      nav: "delux-king",
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
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-50">
        <h1 className="text-2xl">
          Kara O Mula Accommodation – Experience Comfort and Luxury
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
        {rooms.map((room, index) => (
          <div
            key={index}
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
              <div className=" flex flex-row items-center py-2 gap-2">
                {room.features.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-center"
                  >
                    <Image
                      src={`${item}`}
                      alt="images"
                      width={1500}
                      height={100}
                      className="w-5"
                    />
                  </div>
                ))}
              </div>
              <p className=" my-2">{room.description}</p>

              <Link
                href={`/hotels/heritage-hotel/accommodations/${room.nav}`}
                className="text-white font-semibold hover:text-[#FF741E] duration-300"
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
