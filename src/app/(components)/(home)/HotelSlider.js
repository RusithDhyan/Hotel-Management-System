"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
    image: "/hotels/h3.jpeg",
    title: "Heritage Hotel",
    url: "/hotels/heritage-hotel",
    location: "Milward Road, Limbe, Blantyre, Malawi",
    description:
      "A blend of colonial charm and modern comfort, this hotel features 40 elegantly furnished rooms, a spa, outdoor pool.",
  },
  {
    id: 3,
    image: "/hotels/h4.jpeg",
    title: "Kambiri Beach",
    url: "/hotels/kambiri-beach",
    location: "Senga Bay,Salima",
    description:
      "Located on the shores of Lake Malawi, this resort offers beachfront cottages, a restaurant, and various water sports, providing a serene getaway.",
  },
  {
    id: 4,
    image: "/hotels/h12.jpg",
    title: "Kara O Mula",
    url: "/hotels/kara-o-mula",
    location: "Boma Path – Bush, Mulanje, Malawi",
    description:
      "Nestled at the foot of Mount Mulanje, this lodge provides cozy rooms, a restaurant, and opportunities for hiking and exploring the surrounding nature.",
  },
  {
    id: 5,
    image: "/hotels/h11.jpg",
    title: "Lotus Hotel",
    url: "/hotels/lotus-hotel",
    location: "Glyn Jones Road, Namiwawa Avenue, Blantyre, Malawi",
    description:
      "A modern hotel located in the capital city, offering comfortable rooms, dining facilities, and convenient access to government and commercial centers.",
  },
  {
    id: 6,
    image: "/hotels/h8.jpg",
    title: "Waters Edge",
    url: "/hotels/waters-edge",
    location: "Senga Bay,Salima",
    description:
      "A quiet hotel by the Shire River with river-view suites, a pool, and boat safaris. Great for nature lovers and those looking for calm surroundings.",
  },
  {
    id: 7,
    image: "/hotels/h9.jpg",
    title: "Bamboo Boutique",
    url: "/hotels/bamboo-boutique",
    location: "Mdoka Street, Area 12, Lilongwe, Malawi",
    description:
      "A modern and quiet hotel in Lilongwe with comfy rooms, a relaxing garden, and tasty meals — ideal for both business and casual stays.",
  },
  {
    id: 8,
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
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // swipe left
      } else {
        prevSlide(); // swipe right
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div>
      <h1 className="text-center text-xl lg:text-4xl md:text-3xl">
        Find Your Place
      </h1>

      <div className="sm:px-10 px-2 mt-10">
        <div className="relative mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 33.33)}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
                <div className="bg-white p-2 items-center justify-between">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    className="w-full h-50 sm:h-80 object-cover"
                    width={1000}
                    height={100}
                  />
                  <div className={`lg:p-4 ${i === index ? "h-40" : "h-auto"}`}>
                    <h3 className="sm:text-sm md:text-md lg:text-lg font-semibold px-2">
                      {hotel.title}
                    </h3>
                    <h4 className="text-gray-400 sm:text-sm md:text-md lg:text-lg px-2">
                      {hotel.location}
                    </h4>
                    {i === index && (
                      <p className="sm:text-sm md:text-md lg:text-lg px-2 ">
                        {hotel.description}
                      </p>
                    )}
                    <div className="flex flex-row justify-start px-2 mt-5">
                      {i === index && (
                        <Link
                          href={hotel.url}
                          className="text-sm lg:text-lg md:text-md"
                        >
                          <button
                            className="relative text-black pb-2 border-b-2 border-transparent"
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            onTouchStart={() => setIsActive(true)}
                            onTouchEnd={() => setIsActive(false)}
                          >
                            Explore
                            <span
                              className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                                isActive ? "w-full" : "w-7"
                              }`}
                            ></span>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row items-center justify-between sm:justify-end gap-10 sm:gap-20 px-2 sm:px-4 mt-10 xl:gap-20 2xl:gap-25 mt-20">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 2xl:p-4"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={20} />
            </button>

            <Link
              href="/our-collections"
              className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-500"
            >
              View all
            </Link>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 2xl:p-4"
              aria-label="Next Slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
