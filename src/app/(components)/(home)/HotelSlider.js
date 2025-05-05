"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ✅ Hotels array
const hotels = [
  {
    id: 1,
    image: "/hotels/h1.jpeg",
    title: "Blue Waters Lake Resort",
    url: "/hotels/blue-waters",
    location: "Senga Bay,Salima",
    description:
      "Our hotel offers a relaxing stay with modern amenities, warm hospitality, and a beautiful setting in Malawi.Enjoy a peaceful retreat with stunning views.",
  },
  {
    id: 2,
    image: "/hotels/h14.jpg",
    title: "Le Croissant",
    url: "/hotels/le-croissant",
    location: "Limbe,Blantyre",
    description:
      "Le Croissant Patisserie is located within the Heritage by Serendib hotel on Milward Road in Limbe, Blantyre, Malawi.",
  },
  {
    id: 3,
    image: "/hotels/h3.jpeg",
    title: "Heritage Hotel",
    url: "/hotels/heritage-hotel",
    location: "Milward Road, Limbe, Blantyre, Malawi",
    description:
      "A blend of colonial charm and modern comfort, this hotel features 40 elegantly furnished rooms, a spa, outdoor pool, and the Balmoral Restaurant serving Continental and Indian cuisine.",
  },
  {
    id: 4,
    image: "/hotels/h4.jpeg",
    title: "Kambiri Beach",
    url: "/hotels/kambiri-beach",
    location: "Senga Bay,Salima",
    description:
      "Located on the shores of Lake Malawi, this resort offers beachfront cottages, a restaurant, and various water sports, providing a serene getaway.",
  },
  {
    id: 5,
    image: "/hotels/h12.jpg",
    title: "Kara O Mula",
    url: "/hotels/kara-o-mula",
    location: "Boma Path – Bush, Mulanje, Malawi",
    description:
      "Nestled at the foot of Mount Mulanje, this lodge provides cozy rooms, a restaurant, and opportunities for hiking and exploring the surrounding nature.",
  },
  {
    id: 6,
    image: "/hotels/h11.jpg",
    title: "Lotus Hotel",
    url: "/hotels/lotus-hotel",
    location: "Glyn Jones Road, Namiwawa Avenue, Blantyre, Malawi",
    description:
      "A modern hotel located in the capital city, offering comfortable rooms, dining facilities, and convenient access to government and commercial centers.",
  },
  {
    id: 7,
    image: "/hotels/h10.jpg",
    title: "Zaburi Lake Resort",
    url: "/hotels/zaburi-lake-resort",
    location: "Bolera Village, Mangochi, Malawi",
    description:
      "A peaceful lakefront resort on the shores of Lake Malawi. It offers cozy chalets, a private beach, an indoor pool, and delicious food — perfect for a relaxing escape.",
  },
  {
    id: 8,
    image: "/hotels/h8.jpg",
    title: "Waters Edge",
    url: "/hotels/waters-edge",
    location: "Senga Bay,Salima",
    description:
      "A quiet hotel by the Shire River with river-view suites, a pool, and boat safaris. Great for nature lovers and those looking for calm surroundings.",
  },
  {
    id: 9,
    image: "/hotels/h9.jpg",
    title: "Bamboo Boutique",
    url: "/hotels/bamboo-boutique",
    location: "Mdoka Street, Area 12, Lilongwe, Malawi",
    description:
      "A modern and quiet hotel in Lilongwe with comfy rooms, a relaxing garden, and tasty meals — ideal for both business and casual stays.",
  },
  {
    id: 10,
    image: "/hotels/h10.jpg",
    title: "Serendib Travels",
    url: "/hotels/serendib-travels",
    location: "Senga Bay,Salima",
    description:
      "Our hotel offers a relaxing stay with modern amenities, warm hospitality, and a beautiful setting in Malawi.Enjoy a peaceful retreat with stunning views.",
  },
];

export default function HotelSlider() {
  const [isActive, setIsActive] = useState(false);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
        <div>
          <Link
            href="/our-collections"
            className="text-sm lg:text-lg md:text-md flex items-center justify-center"
          >
            <button
              className="relative text-black py-1 px-2 border-b-2 border-transparent text-gray-500"
              onMouseEnter={activateHover}
              onMouseLeave={deactivateHover}
              onTouchStart={activateHover}
              onTouchEnd={deactivateHover}
            >
              View All
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-gray-400 transition-all duration-300 ${
                  isActive ? "w-full" : "w-10"
                }`}
              ></span>
            </button>
          </Link>
        </div>
      </div>

      <div className="sm:px-20 mt-5">
        <div className="relative  mx-auto overflow-hidden p-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 33.33)}%)`,
            }}
          >
            {hotels.map((hotel, i) => (
              <div
                key={hotel.id}
                className={`flex-shrink-0 ${
                  isMobile ? "w-full" : "w-[33.33%]"
                }  transition-all duration-500 ${
                  !isMobile &&
                  (i === index ? "scale-110 w-[50%]" : "scale-90 w-[25%]")
                }`}
                style={{
                  opacity: isMobile && i !== index ? 0 : 1,
                }}
              >
                <div className="bg-white p-2">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    className="w-full h-60 object-cover"
                    width={1000}
                    height={100}
                  />
                  <div className={`lg:p-4 ${i === index ? "h-40" : "h-auto"}`}>
                    <h3 className="text-lg font-semibold">{hotel.title}</h3>
                    <h4 className="text-gray-400">{hotel.location}</h4>
                    {i === index && (
                      <p className="text-sm">{hotel.description}</p>
                    )}
                    <div className="flex flex-row justify-end pb-3">
                      <Link
                        href={hotel.url}
                        className="text-sm lg:text-lg md:text-md"
                      >
                        {i === index && (
                          <button
                            className="relative text-black py-1 px-2 border-b-2 border-transparent"
                            onMouseEnter={() => setHoveredId(hotel.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onTouchStart={() => setHoveredId(hotel.id)}
                            onTouchEnd={() => setHoveredId(null)}
                          >
                            Explore
                            <span
                              className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                                isActive ? "w-full" : "w-10"
                              }`}
                            ></span>
                          </button>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between sm:justify-end gap-20 my-5 border-t border-gray-300 py-3 px-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ArrowLeft size={20} />
            </button>
            <h5 className="text-sm text-gray-500">
              {index + 1}/{hotels.length}
            </h5>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
