"use client";
import React, { useState } from "react";
import Image from "next/image";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const data = [
    { name: "Email", value: "contact@serendib.com" },
    { name: "Phone", value: "+265 123 456 789" },
    { name: "Location", value: "Blantyre, Malawi" },
    { name: "Open Hours", value: "8.00am to 22.00pm" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header image */}
      <div className="w-full relative h-[250px] md:h-[400px]">
        <Image
          src="/contact/contact-img1.jpg"
          alt="contact-img"
          fill
          className="object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Contact Us
        </h1>
      </div>

      {/* Title & Intro */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 md:px-20 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Contact Serendib Hotels – We're Here to Assist You!
        </h1>
        <p className="font-extralight max-w-3xl text-sm md:text-base">
          Have questions or need assistance with bookings? Get in touch with
          Serendib Hotels for reservations, inquiries, or special requests. Our
          team is ready to make your stay unforgettable.
        </p>
      </div>

      {/* Contact Card over Background */}
      <div className="flex flex-col md:flex-row justify-center items-center relative mt-10 pb-10">
        <div className="w-full relative">
          <Image
            src="/contact/contact-img2.jpg"
            alt="contact-img"
            width={1500}
            height={500}
            className="w-full h-150 object-cover"
          />

          {/* Desktop View: Slide Card */}
          <div className="hidden md:flex absolute bottom-0 left-0 m-5">
            <div className="relative w-[350px] h-60 overflow-hidden group">
              {/* Front Card */}
              <div className="absolute inset-0 flex justify-center items-center bg-gray-200 text-black text-2xl transition-all duration-500 group-hover:opacity-0">
                Reservations
              </div>

              {/* Hover Details */}
              <div className="absolute inset-0 flex flex-col p-3 bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 text-base">
                {data.map((item, index) => (
                  <div key={index} className="flex flex-row items-center gap-2">
                    <h1>{item.name}:</h1>
                    <h2>{item.value}</h2>
                  </div>
                ))}
                <h1 className="text-center text-lg font-semibold mt-5 border-t pt-2">
                  Our Address
                </h1>
                <h2 className="text-center">
                  Magasa Avenue,
                  <br /> Off Chilomoni Ring Road,
                  <br /> Namiwawa, Blantyre, Malawi
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Simple Contact Info */}
        <div className="block md:hidden mt-6 w-full text-center">
          <h2 className="text-xl font-semibold mb-4">Reservations</h2>
          <div className="flex flex-col gap-2 text-sm">
            {data.map((item, index) => (
              <div key={index}>
                <span className="font-semibold">{item.name}:</span> {item.value}
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm">
            <h2 className="font-semibold">Our Address</h2>
            <p>
              Magasa Avenue,
              <br /> Off Chilomoni Ring Road,
              <br /> Namiwawa, Blantyre, Malawi
            </p>
          </div>
        </div>
      </div>

      <div className="mx-10 p-10 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Ask Any Questions?</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full border border-gray-300 shadow-sm p-2"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 shadow-sm p-2"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700"
            >
              Ask Any Questions
            </label>
            <textarea
              name="question"
              id="question"
              rows="5"
              className="mt-1 block w-full border border-gray-300 shadow-sm p-2"
              placeholder="Type your question here..."
              value={formData.question}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
