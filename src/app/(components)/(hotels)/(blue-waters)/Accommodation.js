"use client";
import { useState } from "react";
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
      "/hotels/heritage/accommodations/family.jpg",
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
      "/hotels/heritage/accommodations/deluxe.jpg",
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
      "/hotels/heritage/accommodations/premier.jpeg",
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
  const [angle, setAngle] = useState(0);

  const cardCount = hotels.length;
  const rotate = (direction) => {
    const delta = 360 / cardCount;
    setAngle((prev) => prev + (direction === "next" ? -delta : delta));
  };

  const openPopup = (room) => {
    setSelectedRoom(room);
    setImageIndex(0);
  };

  const closePopup = () => setSelectedRoom(null);

  const nextImage = () =>
    setImageIndex((prev) => (prev + 1) % selectedRoom.images.length);
  const prevImage = () =>
    setImageIndex(
      (prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length
    );

  return (
    <div className="relative z-10 px-4 sm:px-6 md:px-10">
      <h1 className="text-center text-3xl font-semibold mt-6">Accommodations</h1>

      <div className="relative w-full h-[400px] flex flex-col items-center mt-10">
        <div className="relative w-[300px] h-[300px] perspective">
          <div
            className="absolute inset-0 transform-style"
            style={{
              transform: `rotateY(${angle}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 1s ease",
            }}
          >
            {hotels.map((hotel, i) => {
              const theta = (360 / cardCount) * i;
              return (
                <div
                  key={hotel.id}
                  className="absolute w-56 h-72 bg-white shadow-xl rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    transform: `rotateY(${theta}deg) translateZ(400px)`,
                    transition: "transform 1s ease",
                  }}
                  onClick={() => openPopup(hotel)}
                >
                  <Image
                    src={hotel.images[0]}
                    alt={hotel.title}
                    width={500}
                    height={300}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h2 className="text-center font-bold text-lg text-gray-700">
                      {hotel.title}
                    </h2>
                    <div className="flex justify-center gap-4 mt-2">
                      <button className="text-sm text-orange-600">View more</button>
                      <Link href={hotel.url}>
                        <span className="text-sm border-b border-orange-600 hover:text-orange-600">
                          Book Now
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-10 mt-10">
          <button
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
            onClick={() => rotate("prev")}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
            onClick={() => rotate("next")}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedRoom && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur"
          onClick={closePopup}
        >
          <div
            className="bg-white w-full max-w-3xl h-[60vh] shadow-2xl flex flex-col md:flex-row relative border border-gray-300 overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
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

            <div className="w-full md:w-1/2 p-4 overflow-auto space-y-2">
              <h2 className="text-xl font-semibold">{selectedRoom.title}</h2>
              <p className="text-sm text-gray-600">{selectedRoom.description}</p>
              <div className="text-sm text-gray-800">
                <p><strong>Bed:</strong> {selectedRoom.bed}</p>
                <p><strong>Size:</strong> {selectedRoom.size}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {selectedRoom.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center space-x-1">
                    <Image src={spec.url} alt={spec.title} width={20} height={20} />
                    <span className="text-xs">{spec.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
