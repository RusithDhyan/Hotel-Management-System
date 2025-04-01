import React from "react";
import Image from "next/image";

function About() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/images/contact.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-50">
        <h1 className="text-2xl">
          Contact Serendib Hotels – We're Here to Assist You!
        </h1>
        <p className="font-extralight">
          Have questions or need assistance with bookings? Get in touch with
          Serendib Hotels for reservations, inquiries, or special requests. Our
          team is ready to make your stay unforgettable.
        </p>
      </div>

      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/images/contact1.jpg"
          alt="contact-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 top-[20%] px-10">
          <div className="relative w-64 h-40 overflow-hidden group">
            {/* Front Card (Visible by Default) */}
            <div className="absolute inset-0 flex justify-center items-center bg-gray-300 text-black text-2xl transition-all duration-500 group-hover:opacity-0">
              Reservations
            </div>

            {/* Hidden Details (Slide In from Left on Hover) */}
            <div className="absolute inset-0 flex flex-col p-3 items-start bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              <p>Email: contact@serendib.com</p>
              <p>Phone: +265 123 456 789</p>
              <p>Location: Blantyre, Malawi</p>
              <p>Open Hours:8.00am to 22.00pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}

export default About;
