import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const fvOffers = [
    {
      url: "/hotels/blue-waters/offers/family-vacation",
      title: "Family Vacation Offer at Blue Waters Lake Resort",
      image: "/offers/family-vacation/fv1.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/le-croissant/offers/family-vacation",
      title: "Family Vacation Offer at Le Orroissant",
      image: "/offers/family-vacation/fv2.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/heritage-hotel/offers/family-vacation",
      title: "Family Vacation Offer at Heritage Hotel",
      image: "/offers/family-vacation/fv3.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/kambiri-beach/offers/family-vacation",
      title: "Family Vacation Offer at Kambiri Beach",
      image: "/offers/family-vacation/fv4.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/kara-o-mula/offers/family-vacation",
      title: "Family Vacation Offer at Kara O Mula",
      image: "/offers/family-vacation/fv5.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/lotus-hotel/offers/family-vacation",
      title: "Family Vacation Offer at Lotus Hotel",
      image: "/offers/family-vacation/fv6.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/zaburi-lake-resort/offers/family-vacation",
      title: "Family Vacation Offer at Zaburi Lake Resort",
      image: "/offers/family-vacation/fv7.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/waters-edge/offers/family-vacation",
      title: "Family Vacation Offer at Waters Edge",
      image: "/offers/family-vacation/fv8.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/bamboo-boutique/offers/family-vacation",
      title: "Family Vacation Offer at Bamboo Boutique",
      image: "/offers/family-vacation/fv9.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/offers/family-vacation/fv-img.jpg"
          alt="early-bird-img"
          width={1500}
          height={100}
          className="h-100 object-cover w-full"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Family Vacation Offer
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
        <div className="flex md:hidden flex-col gap-4 pb-4">
          {fvOffers.map((fv, index) => (
            <div
              key={index}
              className="w-full relative shadow-md group transition-transform duration-300"
            >
              <Image
                src={fv.image}
                alt={fv.title}
                width={1000}
                height={100}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-white bg-opacity-80 backdrop-blur-md rounded-b-md">
                <h2 className="font-semibold text-md mb-1">{fv.title}</h2>
                <p className="text-sm font-light">{fv.description}</p>
                <Link
                  href={fv.url}
                  className="text-[#FF741E] font-semibold text-sm"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fvOffers.map((fv, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-md group transition-transform duration-300"
            >
              <Image
                src={fv.image}
                alt={fv.title}
                width={1000}
                height={100}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col p-3 items-start justify-start border border-gray-300 bg-white/40 backdrop-blur-sm bg-opacity-10 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                <h1 className="text-md font-medium">{fv.title}</h1>
                <p className="font-light text-md">{fv.description}</p>
                <Link
                  href={fv.url}
                  className="text-gray-500 font-semibold hover:text-[#FF741E] duration-300"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
