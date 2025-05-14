import React from "react";
import Image from "next/image";

function About() {
  const hotels = [
    { image: "/logo/blue.png", name: "Blue Waters Lake Resort" },
    { image: "/logo/Heritage.png", name: "Heritage Hotel" },
    { image: "/logo/Kambiri.png", name: "Kambri Beach" },
    { image: "/logo/Serendib-tours.png", name: "Serendib Tours" },
    { image: "/logo/Kara-o-Mula.png", name: "Kara O Mula" },
    { image: "/logo/Lotus.png", name: "Lotus Hotel" },
    { image: "/logo/Waters-Edge.png", name: "Waters Edge" },
    { image: "/logo/Bamboo.png", name: "Bamboo Boutique" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full relative">
        <Image
          src="/about/about.jpg"
          alt="About cover"
          width={1500}
          height={100}
          className="object-cover w-full h-100"
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

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-10 px-5">
        {/* Left Content */}
        <div className=" w-full md:w-1/2 p-2">
          <Image
            src="/about/bg-img1.jpg"
            alt="bamboo-img2"
            width={1000}
            height={100}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-1/2 gap-2 relative overflow-hidden group">
          <h1 className="text-2xl sm:text-3xl">
            Discover Authentic Malawian Hospitality
          </h1>
          <div className="relative w-full">
          <p className="text-sm sm:text-base">
            From the moment you arrive at Heritage Hotel, you are welcomed with
            warm hospitality and a refreshing welcome drink, setting the tone
            for an unforgettable stay. The hotel’s charming blend of traditional
            elegance and modern luxury offers a unique experience in a tranquil
            setting.
          </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-4 py-16 sm:px-6 lg:px-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">
            Why Choose Serendib Hotels
          </h2>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
              <Image
                src="/about/choose1.jpg"
                alt="Excellence"
                width={1500}
                height={200}
                className="mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                World-Class Service
              </h3>
              <p className="text-gray-600">
                We deliver personalized, world-class service to ensure your stay
                is exceptional from start to finish.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
              <Image
                src="/about/choose2.jpg"
                alt="Authenticity"
                width={1500}
                height={200}
                className="mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                Authentic Experience
              </h3>
              <p className="text-gray-600">
                From food to decor, we celebrate Malawian culture in every
                detail of your experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
              <Image
                src="/about/choose3.jpg"
                alt="Sustainability"
                width={1500}
                height={200}
                className="mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                Eco & Community Friendly
              </h3>
              <p className="text-gray-600">
                We support local communities and operate with environmentally
                conscious practices at all locations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 md:px-10 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">Serendib Hotels</h1>
        <p className="font-light max-w-6xl text-sm md:text-base">
          Serendib Hotels & Resorts is a prominent hospitality brand in Malawi,
          offering a diverse collection of hotels and resorts that blend luxury
          with authentic African hospitality. Established in 2014, the group has
          expanded to become a leading name in Malawi's tourism sector.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4 mt-10 px-4">
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
