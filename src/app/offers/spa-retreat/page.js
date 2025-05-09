import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const spOffers = [
    {
      url: "/hotels/blue-waters/offers/luxury-spa",
      title: "Spa Retreat Offer at Blue Waters Lake Resort",
      image: "/offers/spa-retreat/sp1.jpg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    
    {
      url: "/hotels/heritage-hotel/offers/luxury-spa",
      title: "Spa Retreat Offer at Heritage Hotel",
      image: "/offers/spa-retreat/sp3.jpg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/kambiri-beach/offers/luxury-spa",
      title: "Spa Retreat Offer at Kambiri Beach",
      image: "/offers/spa-retreat/sp4.jpg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/kara-o-mula/offers/luxury-spa",
      title: "Spa Retreat Offer at Kara O Mula",
      image: "/offers/spa-retreat/sp5.jpg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/lotus-hotel/offers/luxury-spa",
      title: "Spa Retreat Offer at Lotus Hotel",
      image: "/offers/spa-retreat/sp6.jpg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    
    {
      url: "/hotels/waters-edge/offers/luxury-spa",
      title: "Spa Retreat Offer at Waters Edge",
      image: "/offers/spa-retreat/sp8.jpg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/bamboo-boutique/offers/luxury-spa",
      title: "Spa Retreat Offer at Bamboo Boutique",
      image: "/offers/spa-retreat/sp9.jpg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/offers/spa-retreat/sp-img1.jpg"
          alt="early-bird-img"
          width={1500}
          height={100}
          className="h-100 object-cover w-full"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Spa Retreat Offer
        </h1>
      </div>

      {/* Description Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-6 md:px-10">
        <h1 className="text-xl sm:text-2xl text-center">
          Plan ahead and enjoy more for less
        </h1>
        <p className="font-extralight text-center text-sm sm:text-base">
          Escape into bliss with our exclusive Spa Retreat package. Book your
          serene getaway and enjoy rejuvenating spa treatments, luxury
          accommodations, and complimentary wellness activities. Reserve early
          to save more — valid for stays until 30th April 2026 across all
          Serendib Collection properties.
        </p>
      </div>

      {/* Offer Cards Section */}
      <div className="mt-10 w-full px-4">
        {/* Mobile Vertical Scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4">
          {spOffers.map((sp, index) => (
            <div
              key={index}
              className="w-full relative shadow-md group transition-transform duration-300"
            >
              <Image
                src={sp.image}
                alt={sp.title}
                width={1000}
                height={100}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 bg-white bg-opacity-80 backdrop-blur-md rounded-b-md">
                <h2 className="font-semibold text-md mb-1">{sp.title}</h2>
                <p className="text-sm font-light">{sp.description}</p>
                <Link
                  href={sp.url}
                  className="text-gray-400 hover:text-[#FF741E] duration-300 font-semibold text-sm hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        {/* <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {spOffers.map((sp, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-md group transition-transform duration-300"
            >
              <Image
                src={sp.image}
                alt={sp.title}
                width={1000}
                height={100}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col p-2 items-start justify-start border border-gray-300 bg-white/40 backdrop-blur-sm bg-opacity-10 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                <h1 className="text-md font-medium">{sp.title}</h1>
                <p className="font-light text-md">{sp.description}</p>
                <Link
                  href={sp.url}
                  className="text-gray-500 font-semibold hover:text-[#FF741E] duration-300"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
