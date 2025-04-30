"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    title: "Cable Walk",
    description:
      "Experience comfort and elegance with our top-tier suites and personalized services.",
    image: "/experience/cable-walk.jpg",
    url: "/experiences/exp1-walk-in-cable",
  },
  {
    id: 2,
    title: "Into The Wild",
    description:
      "Experience comfort and elegance with our top-tier suites and personalized services.",
    image: "/experience/into-wild.jpg",
    url: "/experiences/exp2-into-the-wild",
  },
  {
    id: 3,
    title: "Malawi Lake",
    description:
      "Experience comfort and elegance with our top-tier suites and personalized services.",
    image: "/experience/malawi-lake.jpeg",
    url: "/experiences/exp3-malawi-lake",
  },
  {
    id: 4,
    title: "Luxury Stay",
    description:
      "Experience comfort and elegance with our top-tier suites and personalized services.",
    image: "/experience/luxury-stay.jpg",
    url: "/experiences/exp3-malawi-lake",
  },
  {
    id: 5,
    title: "Adventure Tours",
    description:
      "Discover thrilling adventures and breathtaking landscapes with guided tours.",
    image: "/experience/adventure-tour.jpeg",
    url: "/experiences/exp3-malawi-lake",
  },
  {
    id: 6,
    title: "Relaxing Spa",
    description:
      "Rejuvenate your senses with our world-class spa treatments and therapies.",
    image: "/experience/relaxing-spa.jpg",
    url: "/experiences/exp3-malawi-lake",
  },
];

export default function BlogPage() {
  const sliderRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Auto scroll effect (disabled when grid is shown)
  useEffect(() => {
    if (showAll) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [showAll]);

  return (
    <div className="min-h-screen">
      {/* Top Cover */}
      <div className="w-full relative h-[250px] md:h-[400px]">
        <Image
          src="/experience/exp-bg.jpg"
          alt="Experience Cover"
          fill
          className="object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold text-center px-4">
          Our Experience
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
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {showAll ? "Back to Slider" : "View All Blogs"}
        </button>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-10 relative">
        {!showAll && (
          <div className="hidden sm:flex justify-end gap-4 mb-5">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        )}

        {/* Blog Cards */}
        <div
          ref={sliderRef}
          className={`${
            showAll
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex overflow-x-auto gap-4 md:gap-6 scrollbar-hide scroll-smooth"
          }`}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`${
                showAll
                  ? "w-full"
                  : "w-[80%] sm:min-w-[300px] sm:w-[400px] flex-shrink-0"
              } bg-white shadow-md hover:shadow-lg transition overflow-hidden`}
            >
              <div className="relative h-48 md:h-60 w-full">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-2">
                <h2 className="text-xl font-semibold mb-2">{exp.title}</h2>
                <p className="text-sm md:text-base">{exp.description}</p>
                <Link
                  href={exp.url}
                  className="text-blue-600 hover:text-[#FF741E] duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
