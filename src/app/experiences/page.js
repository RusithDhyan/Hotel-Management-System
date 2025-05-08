"use client";

import Image from "next/image";
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

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Top Cover */}
      <div className="w-full relative">
        <Image
          src="/experience/exp-bg.jpg"
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

      <div className="container mx-auto px-4 md:px-6 pt-10">
        {/* Blog Cards in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="w-full bg-white shadow-md hover:shadow-lg transition overflow-hidden"
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
                  className="text-gray-600 hover:text-[#FF741E] duration-300"
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
