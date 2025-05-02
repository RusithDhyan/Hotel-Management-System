"use client";
import { useState } from "react";
import Image from "next/image";

// Room options with images for each hotel and room type
const hotelOptions = {
  "Blue Waters": {
    rooms: {
      "Executive Room": {image:"/hotels/blue-waters/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/blue-waters/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/blue-waters/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/blue-waters/accommodations/premier.jpeg",price:450},
    },
  },
  "Heritage Hotel": {
    rooms: {
      "Executive Room": {image:"/hotels/heritage/accommodations/executive.jpg",price:200},
      "Family Room": {image:"/hotels/heritage/accommodations/family.jpg",price:350},
      "Deluxe King Room": {image:"/hotels/heritage/accommodations/deluxe.jpg",price:400},
      "Premier Room": {image:"/hotels/heritage/accommodations/premier.jpeg",price:450},
    },
  },
  "Le Croissant": {
    rooms: {
      "Executive Room": {image:"/hotels/le-croissant/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/le-croissant/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/le-croissant/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/le-croissant/accommodations/premier.jpeg",price:450},
    },
  },
  "Bamboo Boutique": {
    rooms: {
      "Executive Room": {image:"/hotels/bamboo-boutique/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/bamboo-boutique/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/bamboo-boutique/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/bamboo-boutique/accommodations/premier.jpeg",price:450},
    },
  },
  "Kambiri Beach": {
    rooms: {
      "Executive Room": {image:"/hotels/kambiri-beach/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/kambiri-beach/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/kambiri-beach/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/kambiri-beach/accommodations/premier.jpeg",price:450},
    },
  },
  "Kara O Mula": {
    rooms: {
      "Executive Room": {image:"/hotels/kara-o-mula/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/kara-o-mula/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/kara-o-mula/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/kara-o-mula/accommodations/premier.jpeg",price:450},
    },
  },
  "Lotus Hotel": {
    rooms: {
      "Executive Room": {image:"/hotels/lotus-hotel/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/lotus-hotel/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/lotus-hotel/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/lotus-hotel/accommodations/premier.jpeg",price:450},
    },
  },
  "Serendib Travels": {
    rooms: {
      "Executive Room": {image:"/hotels/serendib-travels/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/serendib-travels/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/serendib-travels/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/serendib-travels/accommodations/premier.jpeg",price:450},
    },
  },
  "Waters Edge": {
    rooms: {
      "Executive Room": {image:"/hotels/waters-edge/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/waters-edge/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/waters-edge/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/waters-edge/accommodations/premier.jpeg",price:450},
    },
  },
  "Zaburi Lake Resort": {
    rooms: {
      "Executive Room": {image:"/hotels/zaburi-lake/accommodations/executive.jpeg",price:200},
      "Family Room": {image:"/hotels/zaburi-lake/accommodations/family.jpeg",price:350},
      "Deluxe King Room": {image:"/hotels/zaburi-lake/accommodations/deluxe.jpeg",price:400},
      "Premier Room": {image:"/hotels/zaburi-lake/accommodations/premier.jpeg",price:450},
    },
  },
};

export default function BookingPage() {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleHotelChange = (e) => {
    setSelectedHotel(e.target.value);
    setSelectedRoom(""); // Reset room when hotel changes
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Confirm Your Booking
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Booking Form */}
        <div className="bg-white shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Guest Information</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-2"
            />

            {/* Hotel Dropdown */}
            <select
              value={selectedHotel}
              onChange={handleHotelChange}
              className="w-full border border-gray-300 px-4 py-2"
            >
              <option value="">Select Hotel</option>
              {Object.keys(hotelOptions).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel}
                </option>
              ))}
            </select>

            {/* Room Dropdown */}
            {selectedHotel && (
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2"
              >
                <option value="">Select Room Type</option>
                {Object.keys(hotelOptions[selectedHotel].rooms).map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </select>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full border border-gray-300 px-4 py-2"
              />
              <input
                type="date"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            <input
              type="number"
              placeholder="Number of Guests"
              min="1"
              className="w-full border border-gray-300 px-4 py-2"
            />
            <textarea
              placeholder="Special Requests (optional)"
              className="w-full border border-gray-300 px-4 py-2"
              rows="3"
            ></textarea>
          </form>
        </div>

        {/* Right Column - Room Summary + Price */}
        <div className="bg-gray-100 shadow-xl p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Selection</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-full sm:w-40">
                {selectedHotel && selectedRoom && (
                  <Image
                    src={hotelOptions[selectedHotel].rooms[selectedRoom].image}
                    alt={selectedRoom}
                    width={1000}
                    height={100}
                    className="w-full h-50 sm:h-30 object-cover"
                  />
                )}
              </div>
              <div>
                <p className="font-medium">{selectedRoom || "Room Type"}</p>
                <p className="text-sm text-gray-500">
                  {selectedHotel || "Hotel"}
                </p>
              </div>
            </div>
          </div>

          {selectedHotel && selectedRoom && (
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-2">Price Details</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>3 nights</span>
                  <span>
                    ${hotelOptions[selectedHotel].rooms[selectedRoom].price * 3}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>$45</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    $
                    {hotelOptions[selectedHotel].rooms[selectedRoom].price * 3 +
                      45}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div>
            <button className="w-full bg-gray-400 hover:bg-gray-500 text-black font-bold py-3 transition">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
