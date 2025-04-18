import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeritageOffers() {
  const allOffers = [
    {
      url: "",
      title: "Weekend Gateway at Lotus Hotel",
      image: "/hotels/heritage/offers/offer1.jpg",
      description:
        "Escape the city for a relaxing weekend and enjoy exclusive savings on your stay. Perfect for a quick recharge!",
    },
    {
      url: "",
      title: "Luxury Spa Retreat at Lotus Hotel",
      image: "/hotels/heritage/offers/offer2.jpg",
      description:
        "Indulge in a serene spa experience with our luxury retreat offer. Book in advance and pamper yourself for less.",
    },
    {
      url: "/hotels/lotus-hotel/offers/early-bird",
      title: "Early Bird Offer at Lotus Hotel",
      image: "/hotels/heritage/offers/offer3.jpg",
      description:
        "Plan ahead and save up to 20%! Secure your dream getaway by booking 90 days in advance.",
    },
    {
      url: "",
      title: "Extended Stay Discount at Lotus Hotel",
      image: "/hotels/heritage/offers/offer4.jpg",
      description:
        "Make the most of your trip with our extended stay rates. Stay longer and enjoy more value with every extra night.",
    },
    {
      url: "",
      title: "Business Traveler Special at Lotus Hotel",
      image: "/hotels/heritage/offers/offer5.jpg",
      description:
        "Tailored for busy professionals — enjoy comfort, convenience, and savings when you book your business trip early.",
    },
    {
      url: "",
      title: "Family Vacation Package at Lotus Hotel",
      image: "/hotels/heritage/offers/offer6.jpg",
      description:
        "Create unforgettable family memories with our special package. Great rates, spacious rooms, and fun for all ages!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      <div className=" w-full h-auto relative">
        <Image
          src="/hotels/heritage/offers/offer-home.png"
          alt=""
          width={1500}
          height={10}
          className="h-100 object-cover"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-white pb-4">
          All Lotus Offers
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-20">
        <h1 className="text-2xl">Unbeatable Hotel Offers Just for You!</h1>
        <p className="font-extralight">
          Enjoy a luxurious stay at unbeatable prices with our exclusive hotel
          offers! Whether you're planning a romantic getaway, a family vacation,
          or a quick business trip, we have special deals tailored for every
          traveler.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {allOffers.map((offer, index) => (
          <div key={index} className="relative overflow-hidden shadow-md group">
            {/* Offer Image */}
            <Image
              src={`${offer.image}`}
              alt={offer.title}
              width={1000}
              height={100}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col p-3 items-start justify-start bg-white/40 backdrop-blur-sm bg-opacity-10 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              <h1 className="text-md font-medium">{offer.title}</h1>
              <p className="font-light text-md">{offer.description}</p>
              <Link
                href={`${offer.url}`}
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
