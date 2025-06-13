"use client";

// export default function ExperiencePage() {
//   const { experiences } = useData();

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ExperienceForm from "../ExperienceForm";
import { useData } from "../context/DataContext";

//   return (
//     <div className="min-h-screen">
//       {/* Top Cover */}
//       <div className="w-full relative">
//         <Image
//           src="/experience/exp-bg.jpeg"
//           alt="Experience Cover"
//           width={1500}
//           height={100}
//           className="object-cover w-full h-100"
//         />
//         <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold text-center px-4">
//           Our Experiences
//         </h1>
//       </div>

//       <div className="flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-10 text-center">
//         <h1 className="text-xl md:text-2xl font-semibold">
//           Unforgettable Experiences Await
//         </h1>
//         <p className="font-light max-w-6xl text-sm md:text-base">
//           Discover the essence of adventure, relaxation, and luxury with our
//           curated experiences. Whether you're exploring scenic landscapes,
//           immersing in local culture, or unwinding in tranquil settings, every
//           moment is designed to leave a lasting impression. Let your journey
//           with us be more than a stay — let it be a story worth telling.
//         </p>
//       </div>

//       {experiences.length === 0 ? (
//         <div className="flex flex-col items-center justify-center my-10 text-gray-500">
//           <p>No experiences available at the moment.</p>
//         </div>
//       ) : (
//         <div className="container mx-auto px-4 md:px-6 pt-10">
//         {/* Blog Cards in Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {experiences.map((exp) => (
//             <div
//               key={exp._id}
//               className="w-full bg-white shadow-md hover:shadow-lg transition overflow-hidden"
//             >
//               <div className="relative h-48 md:h-60 w-full group">
//                 <Link href={`/experiences/${exp._id}`}>
//                   <Image
//                     src={exp.image}
//                     alt={exp.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className=" transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </Link>
//               </div>
//               <div className="p-2">
//                 <h2 className="text-xl font-semibold mb-2">{exp.title}</h2>
//                 <p className="text-sm md:text-base">{exp.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       )}
//       {/* <ExperienceForm /> */}
//     </div>
//   );
// }

export default function ExperiencePage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { experiences } = useData();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Optional: add delay to ensure the page is rendered first
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);
  return (
    <div className="scroll-smooth min-h-screen">
      <div className="w-full relative">
        <Image
          src="/experience/exp-bg.jpeg"
          alt="Experience Cover"
          width={1500}
          height={100}
          className="object-cover w-full h-100"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold text-center px-4">
          Our Experiences
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-10 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Unforgettable Experiences Await
        </h1>
        <p className="font-light max-w-6xl text-sm md:text-base">
          Discover the essence of adventure, relaxation, and luxury with our
          curated experiences. Whether you're exploring scenic landscapes,
          immersing in local culture, or unwinding in tranquil settings, every
          moment is designed to leave a lasting impression. Let your journey
          with us be more than a stay — let it be a story worth telling.
        </p>
      </div>
      <section id="nature" className="p-8 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4">Nature Experience</h2>
        {experiences.filter((exp) => exp.type === "nature").length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {experiences
              .filter((exp) => exp.type === "nature")
              .map((exp, index) => (
                <div
                  key={exp._id}
                  className="shadow-md overflow-hidden bg-white hover:shadow-lg transition group"
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-60 object-cover  transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex flex-col items-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="mt-4 relative inline-block">
                      <Link
                        href={`/experiences/${exp._id}`}
                        className="text-sm lg:text-lg md:text-md"
                      >
                        <button
                          className="relative text-black py-1 border-b-2 border-transparent"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          onTouchStart={() => setHoveredIndex(index)}
                          onTouchEnd={() => setHoveredIndex(null)}
                        >
                          Explore
                          <span
                            className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                              hoveredIndex === index ? "w-full" : "w-8"
                            }`}
                          ></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center italic pl-4">Not yet available.</p>
        )}
      </section>

      <section id="city" className="p-8 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4">City Experience</h2>
        {experiences.filter((exp) => exp.type === "city").length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {experiences
              .filter((exp) => exp.type === "city")
              .map((exp, index) => (
                <div
                  key={exp.type}
                  className="shadow-md overflow-hidden bg-white hover:shadow-lg transition group"
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex flex-col items-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="mt-4 relative inline-block">
                      <Link
                        href={`/experiences#${exp.type}`}
                        className="text-sm lg:text-lg md:text-md"
                      >
                        <button
                          className="relative text-black py-1 border-b-2 border-transparent"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          onTouchStart={() => setHoveredIndex(index)}
                          onTouchEnd={() => setHoveredIndex(null)}
                        >
                          Explore
                          <span
                            className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                              hoveredIndex === index ? "w-full" : "w-8"
                            }`}
                          ></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center italic pl-4">Not yet available.</p>
        )}
      </section>

      <section id="culture" className="p-8 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4">Cultural Experience</h2>
        {experiences.filter((exp) => exp.type === "culture").length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {experiences
              .filter((exp) => exp.type === "culture")
              .map((exp, index) => (
                <div
                  key={exp.type}
                  className="shadow-md overflow-hidden hover:shadow-lg transition group bg-white"
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex flex-col items-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="mt-4 relative inline-block">
                      <Link
                        href={`/experiences#${exp.type}`}
                        className="text-sm lg:text-lg md:text-md"
                      >
                        <button
                          className="relative text-black py-1 border-b-2 border-transparent"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          onTouchStart={() => setHoveredIndex(index)}
                          onTouchEnd={() => setHoveredIndex(null)}
                        >
                          Explore
                          <span
                            className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                              hoveredIndex === index ? "w-full" : "w-8"
                            }`}
                          ></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center italic pl-4">Not yet available.</p>
        )}
      </section>
      {/* <ExperienceForm /> */}
    </div>
  );
}
