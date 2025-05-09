"use client";
import Image from "next/image";
import { useState } from "react";

const hotels = [
  {
    id: 1,
    name: "Blue Waters",
    images: [
      "/hotels/blue-waters/gallery/gallery-img1.jpeg",
      "/hotels/blue-waters/gallery/gallery-img2.jpeg",
      "/hotels/blue-waters/gallery/gallery-img3.jpeg",
      "/hotels/blue-waters/gallery/gallery-img4.jpeg",
      "/hotels/blue-waters/gallery/gallery-img5.jpeg",
      "/hotels/blue-waters/gallery/gallery-img6.jpeg",
      "/hotels/blue-waters/gallery/gallery-img7.jpeg",
    ],
  },
  {
    id: 2,
    name: "Bamboo Boutique",
    images: [
      "/hotels/bamboo-boutique/gallery/gallery-img1.jpeg",
      "/hotels/bamboo-boutique/gallery/gallery-img2.jpeg",
      "/hotels/bamboo-boutique/gallery/gallery-img3.jpeg",
      "/hotels/bamboo-boutique/gallery/gallery-img4.jpeg",
      "/hotels/bamboo-boutique/gallery/gallery-img5.jpeg",
      "/hotels/bamboo-boutique/gallery/gallery-img6.jpeg",
      "/hotels/bamboo-boutique/gallery/gallery-img7.jpeg",
      "/hotels/bamboo-boutique/gallery/gallery-img8.jpeg",
      "/hotels/bamboo-boutique/gallery/gallery-img9.jpeg",
    ],
  },
  {
    id: 3,
    name: "Heritage Hotel",
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
    id: 4,
    name: "Kambiri Beach",
    images: [
      "/hotels/kambiri-beach/gallery/gallery-img1.jpeg",
      "/hotels/kambiri-beach/gallery/gallery-img2.jpeg",
      "/hotels/kambiri-beach/gallery/gallery-img3.jpeg",
      "/hotels/kambiri-beach/gallery/gallery-img4.jpeg",
      "/hotels/kambiri-beach/gallery/gallery-img5.jpeg",
      "/hotels/kambiri-beach/gallery/gallery-img6.jpeg",
      "/hotels/kambiri-beach/gallery/gallery-img7.jpeg",
      "/hotels/kambiri-beach/gallery/gallery-img8.jpeg",
      "/hotels/kambiri-beach/gallery/gallery-img9.jpeg",
    ],
  },
  {
    id: 5,
    name: "Kara O Mula",
    images: [
      "/hotels/kara-o-mula/gallery/gallery-img1.jpeg",
      "/hotels/kara-o-mula/gallery/gallery-img2.jpeg",
      "/hotels/kara-o-mula/gallery/gallery-img3.jpeg",
      "/hotels/kara-o-mula/gallery/gallery-img4.jpeg",
      "/hotels/kara-o-mula/gallery/gallery-img5.jpeg",
      "/hotels/kara-o-mula/gallery/gallery-img6.jpeg",
      "/hotels/kara-o-mula/gallery/gallery-img7.jpeg",
      "/hotels/kara-o-mula/gallery/gallery-img8.jpeg",
      "/hotels/kara-o-mula/gallery/gallery-img9.jpeg",
    ],
  },
];

export default function HotelGallery() {
  const [selectedHotel, setSelectedHotel] = useState(hotels[0]);

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const hotel = hotels.find((h) => h.id === selectedId);
    if (hotel) setSelectedHotel(hotel);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image Banner */}
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

      {/* Dropdown*/}
      <div className="w-full flex justify-center my-6">
        <select
          onChange={handleSelectChange}
          value={selectedHotel.id}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {hotels.map((hotel) => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>

      {/* Gallery Section */}
      <div className="w-full px-4 pb-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {selectedHotel.name} - Gallery
        </h2>
        <div className="columns-2 md:columns-3 gap-2 space-y-2">
          {selectedHotel.images.map((img, index) => (
            <div key={index} className="break-inside-avoid">
              <Image
                width={1000}
                height={index % 3 === 0 ? 800 : index % 3 === 1 ? 600 : 400}
                src={img}
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
