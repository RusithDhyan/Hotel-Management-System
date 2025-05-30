"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  Bed,
  CheckCircle,
  Coffee,
  Fan,
  Refrigerator,
  Snowflake,
  Thermometer,
  Tv,
  Utensils,
  Wifi,
  X,
} from "lucide-react";
import AccommodationForm from "@/app/AccommodationForm";

const specIconMap = {
  "Bath Tub": <Bath size={16} />,
  Kitchen: <Utensils size={16} />,
  TV: <Tv size={16} />,
  "Air Condition": <Snowflake size={16} />,
  Heater: <Thermometer size={16} />,
  "Tea & Coffee": <Coffee size={16} />,
  Refrigerator: <Refrigerator size={16} />,
  Wifi: <Wifi size={16} />,
  "Queen Bed": <Bed size={16} />,
  "Private Bathroom": <Bath size={16} />,
  // fallback
  default: <CheckCircle size={16} />,
};

export default function Accommodation({ hotelId }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const [accommodations, setAccommodations] = useState([]);

  const [room, setOneRoom] = useState({});

  const openPopup = (roomId) => {
    setSelectedRoom(roomId); // only store the ID
    setImageIndex(0);
    fetchOneRoom(roomId); // pass roomId to fetch
  };

  const fetchOneRoom = async (id) => {
    try {
      const res = await fetch(`/api/accommodation/${id}`);
      const data = await res.json();
      console.log("Fetched room:", data); // 🐞 LOG
      setOneRoom(data.room);
      console.log("room", room);
    } catch (err) {
      console.error("Error fetching room:", err);
    }
  };

  const fetchAccommodation = async () => {
    const res = await fetch(`/api/accommodation?hotelId=${hotelId}`);
    const data = await res.json();
    console.log("Fetched accommodations..:", data.data); // <- add this

    if (data.success) setAccommodations(data.data);
  };

  useEffect(() => {
    fetchAccommodation();
    setImageIndex(0);
  }, [room]);

  // if (loading) return <p>Loading accommodations...</p>;

  // if (accommodations.length === 0) return <p>No accommodations found.</p>;

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
    const newIndex =
      centerIndex > 0 ? centerIndex - 1 : accommodations.length - 1;
    setCenterIndex(newIndex);
    scrollToCard(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      centerIndex < accommodations.length - 1 ? centerIndex + 1 : 0;
    setCenterIndex(newIndex);
    scrollToCard(newIndex);
  };

  const closePopup = () => setSelectedRoom(null);

  const nextImage = () =>
    setImageIndex((prev) => (prev + 1) % (room?.images?.length || 1));

  const prevImage = () =>
    setImageIndex(
      (prev) =>
        (prev - 1 + (room?.images?.length || 1)) % (room?.images?.length || 1)
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
          {accommodations.map((accommodation, index) => {
            const isActive = index === centerIndex;
            const scale = isActive ? 1.1 : 0.9;
            const opacity = isActive ? 1 : 0.6;
            const translateY = isActive ? "-10px" : "0px";
            const zIndex = isActive ? 10 : 1;

            return (
              <div
                key={accommodation._id}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 ease-in-out snap-start min-w-[80%] sm:min-w-0"
                style={{
                  transform: `scale(${scale}) translateY(${translateY})`,
                  opacity,
                  zIndex,
                }}
              >
                <Image
                  src={accommodation.image} //check this
                  alt={accommodation.room_type}
                  width={1000}
                  height={500}
                  className="w-full h-50 sm:h-80 md:h-96 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-md sm:text-2xl text-gray-600 text-center font-semibold">
                    {accommodation.room_type}
                  </h3>
                  <div className="flex gap-5 items-center justify-center pb-5">
                    <button
                      className="text-sm md:text-md hover:text-orange-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        openPopup(accommodation._id);
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
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={goToNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Popup component stays unchanged */}

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
              {room?.images?.length > 0 && (
                <img
                  src={room.images[imageIndex]}
                  alt={`room-${imageIndex}`}
                  className="w-full h-full object-cover"
                />
              )}
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
                {room.room_type}
              </h1>
              <h2 className="text-md font-semibold text-gray-700">
                Price: ${room.price}
              </h2>
              <p className="text-sm text-gray-600 mb-1">Size: {room.size}sqm</p>
              <p className="text-sm mb-4">{room.description}</p>

              {/* features */}

              <div>
                <h1 className="font-semibold text-gray-600">What's Inside</h1>
                <div className="grid grid-cols-2 gap-2 pb-5 mt-2">
                  {room?.spec_type?.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      {specIconMap[spec] || specIconMap["default"]}
                      <span>{spec}</span>
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

      {/* <AccommodationForm hotelId={hotelId} /> */}
    </div>
  );
}
