"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    images: [
      "/hotels/lotus-hotel/accommodations/executive.jpeg",
      "/hotels/heritage/accommodations/executive/executive-pop1.jpeg",
      "/hotels/heritage/accommodations/executive/executive-pop2.jpeg",
      "/hotels/heritage/accommodations/executive/executive-pop3.jpeg",
    ],
    specs: [
      { url: "/icons/rooms/item1.png", title: "Bath Tub" },
      { url: "/icons/rooms/item2.png", title: "Air Condition" },
      { url: "/icons/rooms/item3.png", title: "Kitchen" },
      { url: "/icons/rooms/item4.png", title: "Refrigerator" },
      { url: "/icons/rooms/item5.png", title: "TV" },
      { url: "/icons/rooms/item7.png", title: "WiFi" },
      { url: "/icons/rooms/item8.png", title: "Tea & Coffee" },
      { url: "/icons/rooms/item9.png", title: "Four Beds" },
    ],
    title: "Executive Suite",
    bed: "King-size or queen-size bed",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/executive-suite",
    description:
      "For those seeking extra space and comfort, the Executive Suite offers a separate living area and bedroom",
  },
  {
    id: 2,
    images: [
      "/hotels/lotus-hotel/accommodations/family.jpeg",
      "/hotels/heritage/accommodations/family/family-pop1.jpeg",
      "/hotels/heritage/accommodations/family/family-pop2.jpeg",
      "/hotels/heritage/accommodations/family/family-pop3.jpeg",
    ],
    specs: [
      { url: "/icons/rooms/item1.png", title: "Bath Tub" },
      { url: "/icons/rooms/item2.png", title: "Air Condition" },
      { url: "/icons/rooms/item3.png", title: "Kitchen" },
      { url: "/icons/rooms/item4.png", title: "Refrigerator" },
      { url: "/icons/rooms/item5.png", title: "TV" },
      { url: "/icons/rooms/item7.png", title: "WiFi" },
      { url: "/icons/rooms/item8.png", title: "Tea & Coffee" },
      { url: "/icons/rooms/item9.png", title: "Four Beds" },
    ],
    title: "Family Twin Room",
    bed: "1 King bed + 1 or 2 single beds / sofa bed",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/family-twin",
    description:
      "Ideal for families, offering two cozy beds and modern amenities for a comfortable stay together.",
  },
  {
    id: 3,
    images: [
      "/hotels/lotus-hotel/accommodations/deluxe.jpeg",
      "/hotels/heritage/accommodations/deluxe/deluxe-pop1.jpeg",
      "/hotels/heritage/accommodations/deluxe/deluxe-pop2.jpeg",
      "/hotels/heritage/accommodations/deluxe/deluxe-pop3.jpeg",
    ],
    specs: [
      { url: "/icons/rooms/item1.png", title: "Bath Tub" },
      { url: "/icons/rooms/item2.png", title: "Air Condition" },
      { url: "/icons/rooms/item3.png", title: "Kitchen" },
      { url: "/icons/rooms/item4.png", title: "Refrigerator" },
      { url: "/icons/rooms/item5.png", title: "TV" },
      { url: "/icons/rooms/item7.png", title: "WiFi" },
      { url: "/icons/rooms/item8.png", title: "Tea & Coffee" },
      { url: "/icons/rooms/item9.png", title: "Four Beds" },
    ],
    title: "Deluxe King Room",
    bed: "King-size bed (or twin beds)",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/deluxe-king",
    description:
      "Unwind in the Deluxe King Room, boasting stylish decor, a plush king bed, and relaxing ambiance.",
  },
  {
    id: 4,
    images: [
      "/hotels/lotus-hotel/accommodations/premier.jpeg",
      "/hotels/heritage/accommodations/premier/premier-pop1.jpeg",
      "/hotels/heritage/accommodations/premier/premier-pop2.jpeg",
      "/hotels/heritage/accommodations/premier/premier-pop3.jpeg",
    ],
    specs: [
      { url: "/icons/rooms/item1.png", title: "Bath Tub" },
      { url: "/icons/rooms/item2.png", title: "Air Condition" },
      { url: "/icons/rooms/item3.png", title: "Kitchen" },
      { url: "/icons/rooms/item4.png", title: "Refrigerator" },
      { url: "/icons/rooms/item5.png", title: "TV" },
      { url: "/icons/rooms/item7.png", title: "WiFi" },
      { url: "/icons/rooms/item8.png", title: "Tea & Coffee" },
      { url: "/icons/rooms/item9.png", title: "Four Beds" },
    ],
    title: "Premier Heritage Suite",
    bed: "Premium king bed with high-thread-count linens",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/premier",
    description:
      "Experience elegance and space in the Premier Heritage Suite, complete with a king bed and private lounge.",
  },
];
export default function Accommodation() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    const card = container?.children[index];
    if (card && container) {
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const scrollPosition = cardCenter - containerCenter;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  const goToPrevious = () => {
    const newIndex = centerIndex > 0 ? centerIndex - 1 : hotels.length - 1;
    setCenterIndex(newIndex);
    scrollToCard(newIndex);
  };

  const goToNext = () => {
    const newIndex = centerIndex < hotels.length - 1 ? centerIndex + 1 : 0;
    setCenterIndex(newIndex);
    scrollToCard(newIndex);
  };

  // ✅ Center the Executive Room on mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToCard(centerIndex);
    }, 200); // Small delay for smoother initial animation
    return () => clearTimeout(timeout);
  }, []);

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

      <div className="relative w-full mt-6">
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory sm:grid sm:grid-flow-col sm:auto-cols-[33%] sm:overflow-hidden"
        >
          {hotels.map((hotel, index) => {
            const isActive = index === centerIndex;
            const scale = isActive ? 1.1 : 0.9;
            const opacity = isActive ? 1 : 0.6;
            const translateY = isActive ? "-10px" : "0px";
            const zIndex = isActive ? 10 : 1;

            return (
              <div
                key={hotel.id}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 ease-in-out snap-start min-w-[80%] sm:min-w-0"
                style={{
                  transform: `scale(${scale}) translateY(${translateY})`,
                  opacity,
                  zIndex,
                }}
              >
                <Image
                  src={hotel.images[0]}
                  alt={hotel.title}
                  width={1000}
                  height={500}
                  className="w-full h-50 sm:h-80 md:h-96 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-md sm:text-2xl text-gray-600 text-center font-semibold">
                    {hotel.title}
                  </h3>
                  <div className="flex gap-5 items-center justify-center pb-5">
                    <button
                      className="text-sm md:text-md hover:text-orange-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        openPopup(hotel);
                      }}
                    >
                      View more
                    </button>
                    <Link href="/booking" className="text-sm md:text-md">
                      <button
                        className="relative text-black py-1 border-b-2 border-transparent group"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Book Now
                        <span className="absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 w-7 group-hover:w-full"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="flex justify-between sm:justify-end items-center gap-40 mt-10 px-4">
          <button
            onClick={goToPrevious}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ArrowLeft size={18}/>
          </button>
          <button
            onClick={goToNext}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
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
              <h1 className="text-lg sm:text-xl font-bold mb-2">
                {selectedRoom.title}
              </h1>
              <h2 className="text-md font-semibold text-gray-700">
                {selectedRoom.bed}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Size: {selectedRoom.size}
              </p>
              <p className="text-sm mb-4">{selectedRoom.description}</p>

              {/* features */}

              <div>
                <h1 className="font-semibold text-gray-600">What's Inside</h1>
                <div className="grid grid-cols-2 gap-2 pb-5 mt-2">
                  {selectedRoom.specs?.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <span>{spec.title}</span>
                      <Image
                        src={spec.url}
                        alt={spec.title}
                        width={20}
                        height={20}
                        className="w-5 h-5 mr-7"
                      />
                    </div>
                  ))}
                </div>
              </div>

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
