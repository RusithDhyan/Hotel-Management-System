"use client";

import Image from "next/image";
import Link from "next/link";
import BlogForm from "../BlogForm";
import { useData } from "../context/DataContext";

const blogPosts = [
  {
    id: 1,
    title: "A Culinary Journey Through Fine Dining",
    description:
      "Enjoy an exquisite selection of dishes crafted by our expert chefs.",
    image: "/blogs/blog1.jpg",
    url: "/blogs/blog1-dining-in-malawi",
    date: "April 20, 2025",
  },
  {
    id: 2,
    title: "Exploring Luxury at Heritage by Serendib",
    description:
      "Discover the elegance and comfort of our hotel with world-class amenities.",
    image: "/blogs/blog2.jpeg",
    url: "/blogs",
    date: "April 20, 2025",
  },
  {
    id: 3,
    title: "Top Attractions Near Limbe, Blantyre",
    description:
      "Explore beautiful sites and local experiences just minutes away from our hotel.",
    image: "/blogs/blog3.jpeg",
    url: "/blogs",
    date: "April 20, 2025",
  },
  {
    id: 4,
    title: "Top 10 Travel Tips for 2025",
    description:
      "Make your next trip unforgettable with these expert tips and tricks.",
    image: "/blogs/blog4.jpg",
    url: "/blogs",
    date: "April 20, 2025",
  },
  {
    id: 5,
    title: "Why Malawi is Africa’s Hidden Gem",
    description: "Explore Malawi’s best-kept secrets and cultural wonders.",
    image: "/blogs/blog5.jpg",
    url: "/blogs",
    date: "April 18, 2025",
  },
  {
    id: 6,
    title: "Hotel Trends to Watch This Year",
    description: "From eco-luxury to AI concierge—what’s changing in hospitality.",
    image: "/blogs/blog6.jpg",
    url: "/blogs",
    date: "April 15, 2025",
  },
];

export default function BlogPage() {
  const {blogs} = useData();

  return (
    <div className="min-h-screen">
      {/* Top Cover */}
      <div className="w-full relative">
        <Image
          src="/images/blogs.jpg"
          alt="Blog Cover"
          width={1500}
          height={100}
          className="object-cover w-full h-100"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold text-center px-4">
          Blogs
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-10 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Discover Travel & Hospitality Insights
        </h1>
        <p className="font-light max-w-6xl text-sm md:text-base">
          Welcome to our blog! Dive into the latest stories, tips, and industry
          updates in the world of travel, tourism, and hospitality. Whether
          you're a traveler or a hotelier, we’ve got something for you.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-10">
        {/* Blog Cards Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="w-full bg-white shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-48 md:h-60 w-full group">
                <Link href={`/blogs/${blog._id}`}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className=" transition-transform duration-300 group-hover:scale-105"
                />
                </Link>
              </div>
              <div className="p-2">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm md:text-base">{blog.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <BlogForm/> */}
    </div>
  );
}
