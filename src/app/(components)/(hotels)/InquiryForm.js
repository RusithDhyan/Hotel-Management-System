"use client";
import React, { useEffect, useState } from "react";

export default function InquiryForm() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
    const [selectedHotelName, setSelectedHotelName] = useState(null);


  const [form, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    check_in: "",
    check_out: "",
    guests: "",
    inquiry_type: "",
    hotel: "",
    room_type: "",
    message: "",
  });

  useEffect(() => {
    // Fetch hotels initially
    fetch("/api/hotels") // You’ll need to create this endpoint
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.data);
        if (data.data.length > 0) {
          const firstHotelId = data.data[0]._id;
          const firstHotelName = data.data[0].hotel_name;
          setSelectedHotelId(firstHotelId);
          setSelectedHotelName(firstHotelName);
        }
      });
  }, []);

  const handleSelectChange = (e) => {
    const id = e.target.value;
    console.log("log", id);
    setSelectedHotelId(id);

    const selectedHotel = hotels.find((hotel) => hotel._id === id);
    if (!selectedHotel) return;

    const hotelName = selectedHotel.hotel_name;
    setSelectedHotelName(hotelName);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    alert("Thank you for your inquiry!");

    const formData = new FormData();
    formData.append("selectedHotelId", selectedHotelId);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("check_in", form.check_in);
    formData.append("check_out", form.check_out);
    formData.append("guests", form.guests);
    formData.append("inquiry_type", form.inquiry_type);
    formData.append("selectedHotelName", selectedHotelName);
    formData.append("room_type", form.room_type);
    formData.append("message", form.message);

    const res = await fetch("/api/inquiry", {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    if (result.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        check_in: "",
        check_out: "",
        guests: "",
        inquiry_type: "",
        hotel: "",
        room_type: "",
        message: "",
      });
      // fetchExperience();
    } else {
      alert("Error: " + result.error);
    }
  };

  return (
    <div>
      <div className="px-4 sm:px-10 lg:px-32">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Hotel Inquiry Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-10 max-w-4xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-4 w-full">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border-b px-4 py-2"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="border-b px-4 py-2"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border-b px-4 py-2"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="date"
                  name="check_in"
                  value={form.check_in}
                  onChange={handleChange}
                  required
                  className="border-b px-4 py-2 w-full"
                />
                <input
                  type="date"
                  name="check_out"
                  value={form.check_out}
                  onChange={handleChange}
                  required
                  className="border-b px-4 py-2 w-full"
                />
              </div>
              <input
                type="number"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                placeholder="Number of Guests"
                min="1"
                required
                className="border-b px-4 py-2"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 w-full">
              <select
                name="inquiry_type"
                value={form.inquiry_type}
                onChange={handleChange}
                className="border-b px-4 py-2"
                required
              >
                <option value="">Select Type of Inquiry</option>
                <option value="Booking">Booking</option>
                <option value="General">General</option>
                <option value="Group Request">Group Request</option>
                <option value="Special Requirements">
                  Special Requirements
                </option>
              </select>

              <select
                onChange={handleSelectChange}
                value={selectedHotelId || ""}
                className="px-4 py-2 border-b"
              >
                <option value="">Select Hotel</option>
                {hotels.map((hotel) => (
                  <option key={hotel._id} value={hotel._id} value1={hotel.hotel_name}>
                    {hotel.hotel_name}
                  </option>
                ))}
              </select>
              <select
                name="room_type"
                value={form.room_type}
                onChange={handleChange}
                className="border-b px-4 py-2"
                required
              >
                <option value="">Select Room Type</option>
                <option value="Executive">Executive</option>
                <option value="Family">Family</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Premier">Premier</option>
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Special Requests or Message"
                rows={3}
                className="border-b px-4 py-2"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#FF741E] text-white py-2 px-5 hover:bg-orange-500 transition-all"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
