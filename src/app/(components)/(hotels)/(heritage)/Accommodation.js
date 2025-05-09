"use client";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    images: [
      "/hotels/heritage/accommodations/executive.jpg",
      "/hotels/heritage/accommodations/executive/executive-pop1.jpeg",
      "/hotels/heritage/accommodations/executive/executive-pop2.jpeg",
      "/hotels/heritage/accommodations/executive/executive-pop3.jpeg",
    ],
    title: "Executive Suite",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/executive-suite",
    description:
      "For those seeking extra space and comfort, the Executive Suite offers a separate living area and bedroom",
  },
  {
    id: 2,
    images: [
      "/hotels/heritage/accommodations/family.jpg",
      "/hotels/heritage/accommodations/family/family-pop1.jpeg",
      "/hotels/heritage/accommodations/family/family-pop2.jpeg",
      "/hotels/heritage/accommodations/family/family-pop3.jpeg",
    ],
    title: "Family Twin Room",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/family-twin",
    description:
      "Ideal for families, offering two cozy beds and modern amenities for a comfortable stay together.",
  },
  {
    id: 3,
    images: [
      "/hotels/heritage/accommodations/deluxe.jpg",
      "/hotels/heritage/accommodations/deluxe/deluxe-pop1.jpeg",
      "/hotels/heritage/accommodations/deluxe/deluxe-pop2.jpeg",
      "/hotels/heritage/accommodations/deluxe/deluxe-pop3.jpeg",
    ],
    title: "Deluxe King Room",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/deluxe-king",
    description:
      "Unwind in the Deluxe King Room, boasting stylish decor, a plush king bed, and relaxing ambiance.",
  },
  {
    id: 4,
    images: [
      "/hotels/heritage/accommodations/premier.jpeg",
      "/hotels/heritage/accommodations/premier/premier-pop1.jpeg",
      "/hotels/heritage/accommodations/premier/premier-pop2.jpeg",
      "/hotels/heritage/accommodations/premier/premier-pop3.jpeg",
    ],
    title: "Premier Heritage Suite",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/premier",
    description:
      "Experience elegance and space in the Premier Heritage Suite, complete with a king bed and private lounge.",
  },
];

export default function Accommodation() {
  const [index, setIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    const delta = touchStartX.current - touchEndX.current;
    if (delta > threshold) nextSlide();
    else if (delta < -threshold) prevSlide();
  };

  const nextSlide = () => setIndex((prev) => (prev + 1) % hotels.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
  const openPopup = (room) => {
    setSelectedRoom(room);
    setImageIndex(0);
  };
  const closePopup = () => setSelectedRoom(null);
  const nextImage = () =>
    setImageIndex((prev) => (prev + 1) % (selectedRoom?.images?.length || 1));
  const prevImage = () =>
    setImageIndex(
      (prev) =>
        (prev - 1 + (selectedRoom?.images?.length || 1)) %
        (selectedRoom?.images?.length || 1)
    );

  return (
    <div className="relative z-10 px-4 sm:px-6 md:px-10">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">
        Accommodations
      </h1>

      <div className="relative w-full mx-auto overflow-hidden mt-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {hotels.map((hotel) => (
            <div key={hotel.id} className="flex-shrink-0 w-full">
              <div className="bg-white shadow-md overflow-hidden">
                <Image
                  src={hotel.images[0]}
                  alt={hotel.title}
                  width={1000}
                  height={500}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {hotel.title}
                  </h3>
                  <div className="mt-2 flex gap-4">
                    <button
                      className="text-sm text-gray-800 hover:text-orange-600"
                      onClick={() => openPopup(hotel)}
                    >
                      View more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-20 mt-5">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ArrowLeft size={18} />
          </button>
          <span className="text-sm text-gray-500">
            {index + 1}/{hotels.length}
          </span>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {selectedRoom && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm px-2"
          onClick={closePopup}
        >
          <div
            className="bg-white/50 w-full max-w-3xl h-[60vh] sm:h-[70vh] shadow-2xl flex flex-col md:flex-row relative border border-gray-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black z-10"
              onClick={closePopup}
            >
              <X size={22} />
            </button>

            <div className="w-full md:w-1/2 relative bg-black h-64 md:h-full">
              <Image
                src={selectedRoom.images[imageIndex]}
                alt="Room Image"
                fill
                className="object-cover"
              />
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full"
                onClick={prevImage}
              >
                <ArrowLeft size={18} />
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full"
                onClick={nextImage}
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="w-full md:w-1/2 p-4 sm:p-6 overflow-y-auto">
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                {selectedRoom.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Size: {selectedRoom.size}
              </p>
              <p className="text-sm mb-4">{selectedRoom.description}</p>
              <Link href="/booking">
                <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 w-full sm:w-auto">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
