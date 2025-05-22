"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AccommodationForm from "@/app/AccommodationForm";

export default function Accommodation({ hotelId }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);

 

  const openPopup = (room) => {
    setSelectedRoom(room);
    setImageIndex(0);
  };

  useEffect(() => {
    if (!hotelId) return;

    const fetchAccommodations = async () => {
      try {
        const res = await fetch(`/api/accommodation?hotelId=${hotelId}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setAccommodations(data);
        } else {
          console.error("Expected array, got:", data);
        }
      } catch (error) {
        console.error("Error fetching accommodations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, [hotelId]);

  if (loading) return <p>Loading accommodations...</p>;

  if (accommodations.length === 0) return <p>No accommodations found.</p>;

  

  

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
    const newIndex = centerIndex > 0 ? centerIndex - 1 : accommodations.length - 1;
    setCenterIndex(newIndex);
    scrollToCard(newIndex);
  };

  const goToNext = () => {
    const newIndex = centerIndex < accommodations.length - 1 ? centerIndex + 1 : 0;
    setCenterIndex(newIndex);
    scrollToCard(newIndex);
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
      <h1 className="bg-white">{hotelId}</h1>

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
                  src={accommodation.image}
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
                        openPopup(accommodation);
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
          })
        }
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


      <AccommodationForm hotelId={hotelId}/>
    </div>
  );
}
