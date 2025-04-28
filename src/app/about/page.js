import React from "react";
import Image from "next/image";

function About() {
  const hotels = [
    { image: "/logo/blue.png", name: "Blue Waters Lake Resort" },
    { image: "/logo/Heritage.png", name: "Heritage Hotel" },
    { image: "/logo/Kambiri.png", name: "Kambri Beach" },
    { image: "/logo/Serendib-travels.png", name: "Serendib Tours" },
    { image: "/logo/Kara-o-Mula.png", name: "Kara O Mula" },
    { image: "/logo/Lotus.png", name: "Lotus Hotel" },
    { image: "/logo/Zaburi.png", name: "Zaburi Lake Resort" },
    { image: "/logo/Waters-Edge.png", name: "Waters Edge" },
    { image: "/logo/Bamboo.png", name: "Bamboo Boutique" },

  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full relative h-[250px] md:h-[400px]">
        <Image
          src="/images/about.jpg"
          alt="About cover"
          fill
          className="object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-4xl md:text-5xl text-white pb-4 font-bold">
          About
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-10 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Welcome to Serendib Hotels – A Haven of Luxury and Comfort
        </h1>
        <p className="font-light max-w-6xl text-sm md:text-base">
          Nestled in the heart of breathtaking landscapes, Serendib Hotels
          offers a perfect blend of elegance, tranquility, and world-class
          hospitality. Whether you seek a peaceful retreat by the ocean, a
          rejuvenating spa experience, or an adventure-filled getaway, our
          hotels provide an unforgettable stay. From stunning beachfront resorts
          to cozy hillside retreats, every Serendib Hotel is designed to immerse
          you in luxury while embracing the rich culture and natural beauty of
          its surroundings. Indulge in our signature spa treatments, savor
          exquisite cuisine, and experience warm Sri Lankan hospitality that
          makes you feel at home. Come, unwind, and create timeless memories at
          Serendib Hotels – where every stay is a journey to serenity.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-20 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">Serendib Hotels</h1>
        <p className="font-light max-w-6xl text-sm md:text-base">
          Serendib Hotels & Resorts is a prominent hospitality brand in Malawi,
          offering a diverse collection of hotels and resorts that blend luxury
          with authentic African hospitality. Established in 2014, the group has
          expanded to become a leading name in Malawi's tourism sector.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10 px-4">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded shadow-sm hover:scale-110 transition"
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={100}
                height={100}
                className="object-contain w-20 h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
