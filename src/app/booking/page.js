"use client";
import { useState } from "react";
import Image from "next/image";

// Room options with images for each hotel and room type
const hotelOptions = {
  "Blue Waters": {
    rooms: {
      "Executive Room": "/hotels/blue-waters/booking/executive.jpeg",
      "Family Room": "/hotels/blue-waters/booking/family.jpeg",
      "Deluxe King Room": "/hotels/blue-waters/booking/deluxe.jpeg",
      "Premier Room": "/hotels/blue-waters/booking/premier.jpeg",
    },
  },
  "Heritage Hotel": {
    rooms: {
      "Executive Room": "/hotels/heritage/booking/executive.jpg",
      "Family Room": "/hotels/heritage/booking/family.jpg",
      "Deluxe King Room": "/hotels/heritage/booking/deluxe.jpg",
      "Premier Room": "/hotels/heritage/booking/premier.jpg",
    },
  },
  "Le Croissant": {
    rooms: {
      "Executive Room": "/hotels/le-croissant/booking/executive.jpeg",
      "Family Room": "/hotels/le-croissant/booking/family.jpeg",
      "Deluxe King Room": "/hotels/le-croissant/booking/deluxe.jpeg",
      "Premier Room": "/hotels/le-croissant/booking/premier.jpeg",
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
                {/* Show the selected room image dynamically */}
                {selectedHotel && selectedRoom && (
                  <Image
                    src={hotelOptions[selectedHotel].rooms[selectedRoom]}
                    alt={selectedRoom}
                    width={1000}
                    height={100}
                    className="w-full h-24 object-cover"
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

          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Price Details</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>3 nights</span>
                <span>$300</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>$45</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$345</span>
              </div>
            </div>
          </div>

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
