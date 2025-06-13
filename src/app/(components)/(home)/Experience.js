"use client";
import Link from "next/link";
import { useState } from "react";

const experiences = [
  {
    title: "Nature Experience",
    description: "Explore mountains, forests, and rivers.",
    image: "/experience/images/nature.jpeg",
    type: "nature",
  },
  {
    title: "City Experience",
    description: "Discover the urban life and culture.",
    image: "/experience/images/city.jpeg",
    type: "city",
  },
  {
    title: "Cultural Experience",
    description: "Dive into local traditions and festivals.",
    image: "/experience/images/culture.jpg",
    type: "culture",
  },
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 my-10 px-4 md:px-10 text-center">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-center font-semibold">
          Experiences
        </h1>

        <p className="font-light max-w-6xl text-sm md:text-base">
          Join us and escape the ordinary with unforgettable experiences
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {experiences.map((exp, index) => (
          <div key={exp.type} className="shadow-md overflow-hidden bg-white">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-70 object-cover"
            />
            <div className="flex flex-col items-center p-4">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-4">{exp.description}</p>

              <div className="mt-4 relative inline-block">
                <Link
                  href = {`/experiences#${exp.type}`}
                  className="text-sm lg:text-lg md:text-md"
                >
                  <button
                    className="relative text-black py-1 border-b-2 border-transparent"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onTouchStart={() => setHoveredIndex(index)}
                    onTouchEnd={() => setHoveredIndex(null)}
                  >
                    Discover
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
    </div>
  );
}
