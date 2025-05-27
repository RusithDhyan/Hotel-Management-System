"use client";
import Image from "next/image";
import Link from "next/link";
import ExperienceForm from "../ExperienceForm";
import { useData } from "../context/DataContext";

export default function ExperiencePage() {
  const { experiences } = useData();

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
              key={exp._id}
              className="w-full bg-white shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-48 md:h-60 w-full group">
                <Link href={`/experiences/${exp._id}`}>
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    layout="fill"
                    objectFit="cover"
                    className=" transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
              <div className="p-2">
                <h2 className="text-xl font-semibold mb-2">{exp.title}</h2>
                <p className="text-sm md:text-base">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ExperienceForm />
    </div>
  );
}
