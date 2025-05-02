"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "A Culinary Journey Through Fine Dining",
    description:
      "Enjoy an exquisite selection of dishes crafted by our expert chefs.",
    image: "/hotels/heritage/gallery/gallery-img1.jpg",
    url: "/blogs/blog1-dining-in-malawi",
    date: "April 20, 2025",
  },
  {
    id: 2,
    title: "Exploring Luxury at Heritage by Serendib",
    description:
      "Discover the elegance and comfort of our hotel with world-class amenities.",
    image: "/hotels/heritage/gallery/gallery-img2.jpeg",
    url: "/blogs",
    date: "April 20, 2025",
  },
  {
    id: 3,
    title: "Top Attractions Near Limbe, Blantyre",
    description:
      "Explore beautiful sites and local experiences just minutes away from our hotel.",
    image: "/hotels/heritage/gallery/gallery-img3.jpg",
    url: "/blogs",
    date: "April 20, 2025",
  },
  {
    id: 4,
    title: "Top 10 Travel Tips for 2025",
    description:
      "Make your next trip unforgettable with these expert tips and tricks.",
    image: "/hotels/heritage/gallery/gallery-img4.jpg",
    url: "/blogs",
    date: "April 20, 2025",
  },
  {
    id: 5,
    title: "Why Malawi is Africa’s Hidden Gem",
    summary: "Explore Malawi’s best-kept secrets and cultural wonders.",
    image: "/hotels/heritage/gallery/gallery-img5.jpg",
    url: "/blogs",
    date: "April 18, 2025",
  },
  {
    id: 6,
    title: "Hotel Trends to Watch This Year",
    summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
    image: "/hotels/heritage/gallery/gallery-img6.jpg",
    url: "/blogs",
    date: "April 15, 2025",
  },
  {
    id: 7,
    title: "Hotel Trends to Watch This Year",
    summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
    image: "/hotels/heritage/gallery/gallery-img7.jpg",
    url: "/blogs",
    date: "April 15, 2025",
  },
  {
    id: 8,
    title: "Hotel Trends to Watch This Year",
    summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
    image: "/hotels/heritage/gallery/gallery-img8.jpg",
    url: "/blogs",
    date: "April 15, 2025",
  },
  {
    id: 9,
    title: "Hotel Trends to Watch This Year",
    summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
    image: "/hotels/heritage/gallery/gallery-img9.jpg",
    url: "/blogs",
    date: "April 15, 2025",
  },
  {
    id: 10,
    title: "Hotel Trends to Watch This Year",
    summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
    image: "/hotels/heritage/gallery/gallery-img10.jpg",
    url: "/blogs",
    date: "April 15, 2025",
  },
  {
    id: 11,
    title: "Hotel Trends to Watch This Year",
    summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
    image: "/hotels/heritage/gallery/gallery-img11.jpg",
    url: "/blogs",
    date: "April 15, 2025",
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
          src="/images/gallery.jpg"
          alt="Gallery Cover"
          fill
          className="object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold text-center px-4">
          Heritage Gallery
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-10 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
        Step Into Elegance: A Visual Journey Through Heritage
        </h1>
        <p className="font-light max-w-6xl text-sm md:text-base">
          Discover the charm and elegance of our hotel through a curated
          collection of beautiful moments and stunning spaces.
        </p>
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {showAll ? "Back to Slider" : "View All"}
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
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className={`${
                showAll
                  ? "w-full"
                  : "w-[80%] sm:min-w-[300px] sm:w-[400px] flex-shrink-0"
              } bg-white shadow-md hover:shadow-lg transition overflow-hidden relative`}
            >
              <div className="relative h-48 md:h-60 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-3 absolute inset-0 flex flex-col items-start justify-end">
                <div className="border p-2 bg-white/30">
                  <h2 className="text-md font-semibold mb-2">{blog.title}</h2>
                  <p className="text-sm md:text-base ">{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
