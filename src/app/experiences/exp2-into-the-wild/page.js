"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/experience/exp2-into-wild/exp1.jpeg",
  "/experience/exp2-into-wild/exp2.jpeg",
  "/experience/exp2-into-wild/exp3.jpg",
];

export default function Experience3(){
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
          src="/experience/exp2-into-wild/exp-bg1.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">
          Discovering Malawi: Africa’s Hidden Wild Paradise
        </h1>
        <p className="font-light text-sm sm:text-base text-justify">
          Embark on an exhilarating adventure into the heart of Malawi, where
          nature’s raw beauty flourishes. From the dense forests to the
          expansive savannah, Malawi offers a wilderness experience like no
          other. Visitors can explore national parks like Liwonde, renowned for
          its diverse wildlife, or hike through the dramatic landscapes of Nyika
          Plateau. Expect to encounter elephants, lions, and countless bird
          species, all while immersing yourself in the untamed rhythms of
          Africa. The experience is a perfect blend of adrenaline and
          tranquility, where the wilderness is both a challenge and a sanctuary.
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
            A Journey Through Malawi's Untamed Wilderness
          </h1>
          <p>
            Malawi’s wild side is waiting to be discovered. Whether you’re
            kayaking on Lake Malawi or exploring the vast expanse of its
            national parks, the experience is a testament to Africa’s diverse
            ecosystems. This pristine land offers thrilling safaris, serene lake
            views, and a glimpse into the untouched beauty of nature. Traverse
            through the remote wilds of Majete Wildlife Reserve or take a guided
            walking tour to connect with the land and its inhabitants. For those
            seeking an immersive wilderness adventure, Malawi’s untouched
            landscapes provide the perfect backdrop.
          </p>
        </div>
      </div>
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
