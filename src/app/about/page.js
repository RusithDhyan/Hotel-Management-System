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
          Serendib Hotels & Resorts is a proudly Malawian hospitality group
          committed to delivering exceptional guest experiences across some of
          the country’s most scenic and culturally rich destinations. With a
          growing portfolio of distinctive properties, from tranquil lakeside
          retreats to elegant urban stays, we blend world-class service with the
          warmth of authentic Malawian hospitality. Each of our hotels is
          thoughtfully designed to reflect the charm of its surroundings while
          offering modern comforts, personalized service, and unforgettable
          experiences. Whether you're traveling for business, leisure, or a
          special occasion, Serendib Hotels & Resorts promises comfort,
          connection, and a true taste of Malawi.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-10 px-5">
        {/* Left Content */}
        <div className=" w-full md:w-1/2 p-2">
          <Image
            src="/about/bg-img1.jpeg"
            alt="bamboo-img2"
            width={1000}
            height={100}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-1/2 gap-2 relative overflow-hidden group">
          <h1 className="text-2xl sm:text-3xl">
            Come as a guest. Leave as a friend.
            <br />
            Experience hospitality the Malawian way.
          </h1>
          <div className="relative w-full">
            <p className="text-sm sm:text-base">
              At Serendib Hotels & Resorts, we don't just offer a place to
              stay—we offer an experience rooted in the heart and soul of
              Malawi. Known as “The Warm Heart of Africa,” Malawi is celebrated
              for the kindness, generosity, and warmth of its people. We proudly
              carry that tradition forward by treating every guest like family.
              <br />
              From your first welcome to your final farewell, our team is
              dedicated to making your stay truly unforgettable. Whether you're
              sipping local tea by the lake, enjoying home-cooked flavours, or
              receiving a heartfelt smile from our staff, every moment is
              infused with genuine care and cultural richness.
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
                src="/about/choose1.jpeg"
                alt="Excellence"
                width={1500}
                height={200}
                className="mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                World-Class Service
              </h3>
              <p className="text-gray-600">
                At Serendib, hospitality is more than a profession it our
                promise. From the moment you arrive at our doorstep, our
                dedicated staff ensures that every detail is handled with care,
                warmth, and professionalism. Whether you’re staying at a serene
                lakeside resort, a boutique city hotel, or an adventure lodge at
                the foot of a mountain, our service is personalized, prompt, and
                infused with heart.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
              <Image
                src="/about/choose2.JPG"
                alt="Authenticity"
                width={1500}
                height={200}
                className="mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                Local Connection: Stay Where Malawi Lives
              </h3>
              <p className="text-gray-600">
                At Serendib Hotels & Resorts, we don’t just operate in Malawi,
                we are part of it. Each of our hotels are thoughtfully
                integrated into its local setting, offering guests an authentic
                gateway into the heart of Malawian life.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
              <Image
                src="/about/choose3.jpeg"
                alt="Sustainability"
                width={1500}
                height={200}
                className="mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                Authentic Experience
              </h3>
              <p className="text-gray-600">
                Every Serendib property is a window into the soul of Malawi. We
                believe that travel should connect you with people, place, and
                culture. Whether you're enjoying a traditional cooking class at
                Kara O'Mula, joining a local village tour, or listening to live
                Malawian music under the stars, our experiences are designed to
                be immersive, meaningful, and true to the land. This isn’t just
                a stay—it’s a story you become part of.
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
