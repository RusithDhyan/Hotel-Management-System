import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const ebOffers = [
    {
      url: "/hotels/blue-waters/offers/early-bird",
      title: "Early Bird Offer at Blue Waters Lake Resort",
      image: "/offers/early-bird/eb1.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/le-croissant/offers/early-bird",
      title: "Early Bird Offer at Le Orroissant",
      image: "/offers/early-bird/eb2.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/heritage-hotel/offers/early-bird",
      title: "Early Bird Offer at Heritage Hotel",
      image: "/offers/early-bird/eb3.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/kambiri-beach/offers/early-bird",
      title: "Early Bird Offer at Kambiri Beach",
      image: "/offers/early-bird/eb4.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/kara-o-mula/offers/early-bird",
      title: "Early Bird Offer at Kara O Mula",
      image: "/offers/early-bird/eb5.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/lotus-hotel/offers/early-bird",
      title: "Early Bird Offer at Lotus Hotel",
      image: "/offers/early-bird/eb6.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/zaburi-lake-resort/offers/early-bird",
      title: "Early Bird Offer at Zaburi Lake Resort",
      image: "/offers/early-bird/eb7.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/waters-edge/offers/early-bird",
      title: "Early Bird Offer at Waters Edge",
      image: "/offers/early-bird/eb8.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/bamboo-boutique/offers/early-bird",
      title: "Early Bird Offer at Bamboo Boutique",
      image: "/offers/early-bird/eb9.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/offers/early-bird/eb-img1.jpg"
          alt="early-bird-img"
          width={1500}
          height={100}
          className="h-100 object-cover w-full"
        />

        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Early Bird Offer
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-6 md:px-10">
        <h1 className="text-xl sm:text-2xl text-center">
          Plan ahead and enjoy more for less
        </h1>
        <p className="font-extralight text-center text-sm sm:text-base">
          Save more when you book ahead of time. Book 3 months or more in
          advance and enjoy up to 20% off your stay. This offer is valid for
          stays until 30th April 2026 across all our properties.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
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
            <div className="absolute inset-0 flex flex-col p-3 items-start justify-start border border-gray-300 bg-white/40 backdrop-blur-sm bg-opacity-10 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              <h1 className="text-md font-medium">{eb.title}</h1>
              <p className="font-light text-md">{eb.description}</p>
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
