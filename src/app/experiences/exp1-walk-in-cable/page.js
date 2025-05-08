"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/experience/exp1-cable-walk/exp1.jpeg",
  "/experience/exp1-cable-walk/exp2.jpg",
  "/experience/exp1-cable-walk/exp-bg1.jpg",
  "/experience/exp1-cable-walk/exp-bg1.jpg",
];

export default function Experience3() {
  const [current, setCurrent] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your inquiry!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      roomType: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/experience/exp1-cable-walk/exp-bg1.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">
          Walk the Skies: Malawi’s Thrilling Cable Walk Adventure
        </h1>
        <p className="font-light text-sm sm:text-base text-justify">
          Experience Malawi from an exhilarating new perspective as you take on
          the ultimate challenge — a cable walk suspended high above the forest
          canopy or scenic valleys...
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          <Image
            src={images[current]}
            alt="Exp"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Experience the Flavors of Heritage
          </h1>
          <p>
            Take adventure to new heights with Malawi’s breathtaking cable
            walking experience. Suspended high above scenic valleys and forest
            canopies, this thrilling activity combines stunning views with
            heart-pounding excitement. Perfect for adventurers and nature
            lovers, the cable walk offers a safe, guided journey across the
            skies — where every step brings a rush of adrenaline and awe.
          </p>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="px-4 sm:px-10 lg:px-32 py-12 mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Hotel Inquiry Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="border-b px-4 py-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="border-b px-4 py-2"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border-b px-4 py-2"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className="border-b px-4 py-2 w-full"
            />
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="border-b px-4 py-2 w-full"
            />
          </div>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Number of Guests"
            min="1"
            required
            className="border-b px-4 py-2"
          />
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="border-b px-4 py-2"
          >
            <option value="">Select Room Type</option>
            <option value="single">Executive</option>
            <option value="double">Family</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Premier</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Special Requests or Message"
            rows={2}
            className="border-b px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 hover:bg-blue-700 transition-all"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
