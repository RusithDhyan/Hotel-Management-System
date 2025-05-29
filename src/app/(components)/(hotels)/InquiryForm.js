"use client";
import React, { useState } from "react";

export default function InquiryForm() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
//   const handleChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    alert("Thank you for your inquiry!");

    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   check_in: "",
    //   check_out: "",
    //   guests: "",
    //   inquiry_type: "",
    //   hotel: "",
    //   room_type: "",
    //   message: "",
    // });

    const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("check_in", form.check_in);
      formData.append("check_out", form.check_out);
      formData.append("guests", form.guests);
      formData.append("inquiry_type", form.inquiry_type);
      formData.append("hotel", form.hotel);
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
      <div className="px-4 sm:px-10 lg:px-32 py-12 mt-10">
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
                <option value="Special Requirements">Special Requirements</option>
              </select>
              <select
                name="hotel"
                value={form.hotel}
                onChange={handleChange}
                className="border-b px-4 py-2"
                required
              >
                <option value="">Select Hotel</option>
                <option value="Bamboo Boutique">Bamboo Boutique</option>
                <option value="Blue Waters">Blue Waters</option>
                <option value="Heritage Hotel">Heritage Hotel</option>
                <option value="Kambiri Beach">Kambiri Beach</option>
                <option value="Kara O Mula">Kara O Mula</option>
                <option value="Lotus Hotel">Lotus Hotel</option>
                <option value="Serendib Travels">Serendib Travels</option>
                <option value="Waters Edge">Waters Edge</option>
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
