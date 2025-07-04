"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BookingPage() {
  const [accommodation, setAccommodation] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedHotelId, setSelectedHotelId] = useState("");
  const [hotels, setHotels] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);

  const selectedRoomObj = accommodation.find(
    (room) => room.room_type === selectedRoom
  );

  useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.data || []);
        if (data.data.length > 0) {
          const firstHotel = data.data[0];
          setSelectedHotelId(firstHotel._id);
          setSelectedHotel(firstHotel.hotel_name);
        }
      });
  }, []);

  const fetchAccommodation = async (hotelId) => {
    const res = await fetch(
      `/api/check-availability?hotelId=${hotelId}&checkIn=${checkIn}&checkOut=${checkOut}`
    );
    const data = await res.json();
    if (data.success) {
      setAccommodation(data.data);
      setAvailableRooms(data.data);
    }
  };

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedHotelId(id);
    fetchAccommodation(id);
    const hotelObj = hotels.find((hotel) => hotel._id === id);
    if (hotelObj) {
      setSelectedHotel(hotelObj.hotel_name);
    }
  };

  const checkAvailability = async () => {
    if (!selectedHotelId || !checkIn || !checkOut) {
      alert("Please select a hotel and dates.");
      return;
    }

    const res = await fetch("/api/check-availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hotelId: selectedHotelId, checkIn, checkOut }),
    });

    const data = await res.json();
    if (data.success) {
      setAvailableRooms(data.availableRooms);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Confirm Your Booking
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="bg-white shadow-xl p-6">
          <h2 className="text-xl text-center font-semibold mb-4">
            Guest Information
          </h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <select
              onChange={handleSelectChange}
              value={selectedHotelId}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
            >
              {hotels.map((hotel) => (
                <option key={hotel._id} value={hotel._id}>
                  {hotel.hotel_name}
                </option>
              ))}
            </select>

            <input
              type="date"
              className="w-full border border-gray-300 px-4 py-2"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <input
              type="date"
              className="w-full border border-gray-300 px-4 py-2"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />

            {selectedHotel && (
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2"
              >
                <option value="">Select Room Type</option>
                {availableRooms.map((room) => (
                  <option key={room._id} value={room.room_type}>
                    {room.room_type}
                  </option>
                ))}
              </select>
            )}
          </form>
        </div>

        {/* Right Column */}
        <div className="bg-gray-100 shadow-xl p-6 space-y-6">
          <h2 className="text-xl text-center font-semibold mb-2">
            Your Selection
          </h2>
          {selectedRoomObj && (
            <Image
              src={selectedRoomObj.image}
              alt={selectedRoomObj.room_type}
              width={1000}
              height={400}
              className="w-full h-60 object-cover"
            />
          )}

          <div>
            <p className="font-medium">Room Type: {selectedRoom}</p>
            <p className="text-sm text-gray-500">Hotel: {selectedHotel}</p>
          </div>

          {selectedHotel && selectedRoom && selectedRoomObj && (
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-2">Price Details</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Per night</span>
                  <span>${selectedRoomObj.price}</span>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={checkAvailability}
            className="w-full bg-gray-400 hover:bg-gray-500 text-black font-bold py-3 transition"
          >
            Check Availability
          </button>
        </div>
      </div>

      {availableRooms.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Available Rooms
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {availableRooms.map((room) => (
              <div
                key={room._id}
                className="bg-white shadow-lg rounded-md overflow-hidden"
              >
                <Image
                  src={room.image}
                  alt={room.room_type}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{room.room_type}</h3>
                  <p className="text-gray-600">
                    Price per night: ${room.price}
                  </p>
                  <button
                    onClick={() => setSelectedRoom(room.room_type)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
