import React from "react";
import Image from "next/image";

function About() {
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
          src="/images/contact.jpg"
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
      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/images/contact1.jpg"
          alt="contact-img"
          width={1500}
          height={100}
          className="w-full max-h-[500px] object-cover rounded"
        />
        <div className="absolute inset-0 flex items-end md:justify-left ml-5 p-4">
          <div className="relative w-[90%] sm:w-80 h-60 overflow-hidden group">
            {/* Front Card */}
            <div className="absolute inset-0 flex justify-center items-center bg-gray-300 text-black text-xl sm:text-2xl transition-all duration-500 group-hover:opacity-0">
              Reservations
            </div>

            {/* Hover Details */}
            <div className="absolute inset-0 flex flex-col p-3 bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 text-sm sm:text-base">
              {data.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-2">
                  <h1>{item.name}:</h1>
                  <h2>{item.value}</h2>
                </div>
              ))}
              <h1 className="text-center text-lg font-semibold mt-5 border-t pt-2">
                Our Address
              </h1>
              <h2>
                Magasa Avenue,
                <br /> Off Chilomoni Ring Road,
                <br /> Namiwawa, Blantyre, Malawi
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
