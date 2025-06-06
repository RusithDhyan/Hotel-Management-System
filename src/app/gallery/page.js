"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HotelGallery() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [hotelName, setHotelName] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch hotels initially
    fetch("/api/hotels") // You’ll need to create this endpoint
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.data);
        if (data.data.length > 0) {
          const firstHotelId = data.data[0]._id;
          setSelectedHotelId(firstHotelId);
          fetchGallery(firstHotelId);
        }
      });
  }, []);

  const fetchGallery = (hotelId) => {
    fetch(`/api/all-gallery?hotelId=${hotelId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setImages(data.data.images);
          setHotelName(data.data.hotelName);
        }
      });
  };

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedHotelId(id);
    fetchGallery(id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/images/gallery.jpg"
          alt="Gallery Banner"
          width={1500}
          height={100}
          className="h-100 object-cover w-full"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Gallery
        </h1>
      </div>

      {/* Dropdown */}
      <div className="w-full flex justify-center my-6">
        <select
          onChange={handleSelectChange}
          value={selectedHotelId || ""}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">Select Hotel</option>
          {hotels.map((hotel) => (
            <option key={hotel._id} value={hotel._id}>
              {hotel.hotel_name}
            </option>
          ))}
        </select>
      </div>

      {/* Gallery Section */}
      <div className="w-full px-4 pb-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {hotelName} - Gallery
        </h2>
        <div className="columns-2 md:columns-3 gap-2 space-y-2">
          {images.map((img, index) => (
            <div key={index} className="break-inside-avoid">
              <Image
                src={img}
                width={1000}
                height={index % 3 === 0 ? 800 : index % 3 === 1 ? 600 : 400}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
