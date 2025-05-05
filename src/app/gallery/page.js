"use client"
import Image from "next/image";
import { useState } from "react";

const hotels = [
  {
    id: 1,
    name: "Blue Waters",
    images: [
      "/hotels/heritage/gallery/gallery-img1.jpg",
      "/hotels/heritage/gallery/gallery-img2.jpeg",
      "/hotels/heritage/gallery/gallery-img3.jpg",
      "/hotels/heritage/gallery/gallery-img4.jpg",
      "/hotels/heritage/gallery/gallery-img5.jpg",
      "/hotels/heritage/gallery/gallery-img6.jpg",
      "/hotels/heritage/gallery/gallery-img7.jpg",
      "/hotels/heritage/gallery/gallery-img8.jpg",
      "/hotels/heritage/gallery/gallery-img9.jpg",
      "/hotels/heritage/gallery/gallery-img10.jpg",
      "/hotels/heritage/gallery/gallery-img11.jpg",
      "/hotels/heritage/gallery/gallery-img12.jpg",
      "/hotels/heritage/gallery/gallery-img13.jpg",
      "/hotels/heritage/gallery/gallery-img14.jpg",


    ],
  },
  {
    id: 2,
    name: "Bamboo Boutique",
    images: [
      "/hotels/heritage/gallery/gallery-img5.jpg",
      "/hotels/heritage/gallery/gallery-img6.jpg",
      "/hotels/heritage/gallery/gallery-img7.jpg",
      "/hotels/heritage/gallery/gallery-img8.jpg",
      "/hotels/heritage/gallery/gallery-img9.jpg",
      "/hotels/heritage/gallery/gallery-img10.jpg",
      "/hotels/heritage/gallery/gallery-img11.jpg",
      "/hotels/heritage/gallery/gallery-img12.jpg",
      "/hotels/heritage/gallery/gallery-img13.jpg",
      "/hotels/heritage/gallery/gallery-img14.jpg",

    ],
  },
];

export default function HotelGallery() {
  const [selectedHotel, setSelectedHotel] = useState(hotels[0]);

  return (
    <div className="flex flex-col min-h-screen">
       <div className="w-full h-auto relative">
              <Image
                src="/images/gallery.jpg"
                alt="early-bird-img"
                width={1500}
                height={100}
                className="h-100 object-cover w-full"
              />
              <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
                Gallery
              </h1>
            </div>
    <div className="w-full relative h-auto">
     
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side - Hotel Cards */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Hotels</h2>
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className={`p-4 mb-2 border  cursor-pointer hover:bg-gray-200 ${
              selectedHotel.id === hotel.id ? "bg-blue-100" : ""
            }`}
            onClick={() => setSelectedHotel(hotel)}
          >
            <h3 className="text-lg font-medium">{hotel.name}</h3>
          </div>
        ))}
      </div>

      {/* Right Side - Hotel Gallery */}
      <div className="w-full md:w-2/3 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">
          {selectedHotel.name} - Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {selectedHotel.images.map((img, index) => (
            <Image
              key={index}
              width={1000}
              height={100}
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-auto object-cover"
              style={{ aspectRatio: index % 2 === 0 ? "4/3" : "1/1" }}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
    
  );
}
