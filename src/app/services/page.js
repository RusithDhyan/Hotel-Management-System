import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  const ebOffers = [
    {
      url: "",
      title: "Fitness Center",
      image: "/services/s2.jpeg",
      description:
        "Stay active during your stay with access to our well-equipped gym, featuring modern cardio and strength-training equipment.",
    },
    {
      url: "",
      title: "Poolside Relaxation",
      image: "/services/s1.jpeg",
      description:
        "Unwind by our refreshing pool—perfect for a morning dip or sunset lounging with a cool drink in hand.",
    },
    {
      url: "",
      title: "The Restuarant Hub",
      image: "/services/s3.jpeg",
      description:
        "Savor local and international flavors at our on-site dining hub, where every meal is a celebration of taste.",
    },
    {
      url: "",
      title: "Pickup & Drop Off Services",
      image: "/services/s5.jpeg",
      description:
        "Enjoy seamless travel with our reliable airport and local shuttle services, available on request.",
    },
    {
      url: "",
      title: "Secure Parking Space",
      image: "/services/s6.jpeg",
      description:
        "Take advantage of our complimentary parking facilities, available 24/7 for your peace of mind.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/images/service.jpg"
          alt=""
          width={1500}
          height={10}
          className="h-100 object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-30">
        <h1 className="text-2xl">Our Guest Signature Services</h1>
        <p className="font-extralight">
          At Serendib Hotel Collection, we curate unforgettable experiences
          through our warm hospitality, diverse accommodations, and personalized
          guest services. From luxurious beach resorts to tranquil lakeside
          retreats, we offer fine dining, wellness facilities, event hosting,
          and eco-conscious travel – all designed to make your stay truly
          exceptional.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-10">
        {ebOffers.map((eb, index) => (
          <div key={index} className="relative overflow-hidden shadow-md group">
            {/* Offer Image */}
            <Image
              src={`${eb.image}`}
              alt={eb.title}
              width={1000}
              height={100}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col p-3 items-start justify-start border border-gray-300 bg-white/20 backdrop-blur-sm bg-opacity-10 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              <h1 className="text-md font-medium">{eb.title}</h1>
              <p className="font-light text-md my-2">{eb.description}</p>
              <Link
                href={`${eb.url}`}
                className="text-gray-500 font-semibold hover:text-[#FF741E] duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
