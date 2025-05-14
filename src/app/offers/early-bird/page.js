// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function page() {
//   const ebOffers = [
//     {
//       url: "/hotels/blue-waters/offers/early-bird",
//       title: "Early Bird Offer at Blue Waters Lake Resort",
//       image: "/offers/early-bird/eb1.jpeg",
//       description:
//         "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
//     },
//     {
//       url: "/hotels/heritage-hotel/offers/early-bird",
//       title: "Early Bird Offer at Heritage Hotel",
//       image: "/offers/early-bird/eb3.jpeg",
//       description:
//         "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
//     },
//     {
//       url: "/hotels/kambiri-beach/offers/early-bird",
//       title: "Early Bird Offer at Kambiri Beach",
//       image: "/offers/early-bird/eb4.jpeg",
//       description:
//         "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
//     },
//     {
//       url: "/hotels/kara-o-mula/offers/early-bird",
//       title: "Early Bird Offer at Kara O Mula",
//       image: "/offers/early-bird/eb5.jpeg",
//       description:
//         "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
//     },
//     {
//       url: "/hotels/lotus-hotel/offers/early-bird",
//       title: "Early Bird Offer at Lotus Hotel",
//       image: "/offers/early-bird/eb6.jpeg",
//       description:
//         "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
//     },
    
//     {
//       url: "/hotels/waters-edge/offers/early-bird",
//       title: "Early Bird Offer at Waters Edge",
//       image: "/offers/early-bird/eb8.jpeg",
//       description:
//         "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
//     },
//     {
//       url: "/hotels/bamboo-boutique/offers/early-bird",
//       title: "Early Bird Offer at Bamboo Boutique",
//       image: "/offers/early-bird/eb9.jpeg",
//       description:
//         "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Image */}
//       <div className="w-full h-auto relative">
//         <Image
//           src="/offers/early-bird/eb-img1.jpg"
//           alt="early-bird-img"
//           width={1500}
//           height={100}
//           className="h-100 object-cover w-full"
//         />
//         <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
//           Early Bird Offer
//         </h1>
//       </div>

//       {/* Description Section */}
//       <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-6 md:px-10">
//         <h1 className="text-xl sm:text-2xl text-center">
//           Plan ahead and enjoy more for less
//         </h1>
//         <p className="font-extralight text-center text-sm sm:text-base">
//           Save more when you book ahead of time. Book 3 months or more in
//           advance and enjoy up to 20% off your stay. This offer is valid for
//           stays until 30th April 2026 across all our properties.
//         </p>
//       </div>

//       {/* Offer Cards Section */}
//       <div className="mt-10 w-full px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4">
//           {ebOffers.map((eb, index) => (
//             <div
//               key={index}
//               className="w-full relative shadow-md group transition-transform duration-300"
//             >
//               <Image
//                 src={eb.image}
//                 alt={eb.title}
//                 width={1000}
//                 height={100}
//                 className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="p-4 bg-white bg-opacity-80 backdrop-blur-md rounded-b-md">
//                 <h2 className="font-semibold text-md mb-1">{eb.title}</h2>
//                 <p className="text-sm font-light">{eb.description}</p>
//                 <Link
//                   href={eb.url}
//                   className="text-gray-400 hover:text-[#FF741E] duration-300 font-semibold text-sm hover:underline"
//                 >
//                   Learn more
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";
import InquiryForm from "@/app/(components)/(offer)/InquiryForm";
import { CircleChevronLeft, CircleChevronRight, Disc, Goal, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

  const offers = [
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
  ];


export default function EarlyBird() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/blue-waters/offers/early-bird/bg.jpg"
          alt="early-bird-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-2xl sm:text-5xl text-white pb-4 text-center">
          Early Bird Offer
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10 text-center">
        <h1 className="text-xl sm:text-2xl">Early Bird Offer at Bamboo Boutique</h1>
        <p className="font-extralight text-sm sm:text-base">
          Plan ahead and enjoy more for less. Book 3 months or more in advance
          and enjoy up to 20% off your stay. This offer is valid for stays until
          30th April 2026 across all our properties.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-10 px-4 sm:px-10">
        <Image
          src="/hotels/blue-waters/offers/early-bird/bg-img.jpg"
          alt="early-bird-img"
          width={1000}
          height={100}
          className="w-full lg:w-1/2 h-auto object-cover"
        />
        
        <div className="flex flex-col items-start justify-center gap-1 text-left">
          <h1 className="text-xl sm:text-2xl py-2">Offer Inclusions</h1>
          {offers.map((offer, index) => (
            <div key={index} className="flex items-center gap-2">
              <Goal size={15} />
              <h3 className="text-sm font-light">{offer.name}</h3>
            </div>
          ))}
          <Link href="/">
            <button className="relative group text-black py-2 px-4 mt-2 rounded-md hover:bg-orange-100">
              Book
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </Link>
        </div>
      </div>

      <InquiryForm/>

    </div>
  );
}
