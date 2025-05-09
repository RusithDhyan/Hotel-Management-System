"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCardsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "A Culinary Journey Through Fine Dining",
      description:
        "Enjoy an exquisite selection of dishes crafted by our expert chefs.",
      image: "/hotels/kara-o-mula/gallery/gallery-img1.jpeg",
      url: "/blogs/blog1-dining-in-malawi",
      date: "April 20, 2025",
    },
    {
      id: 2,
      title: "Exploring Luxury at kara-o-mula by Serendib",
      description:
        "Discover the elegance and comfort of our hotel with world-class amenities.",
      image: "/hotels/kara-o-mula/gallery/gallery-img2.jpeg",
      url: "/blogs",
      date: "April 20, 2025",
    },
    {
      id: 3,
      title: "Top Attractions Near Limbe, Blantyre",
      description:
        "Explore beautiful sites and local experiences just minutes away from our hotel.",
      image: "/hotels/kara-o-mula/gallery/gallery-img3.jpeg",
      url: "/blogs",
      date: "April 20, 2025",
    },
    {
      id: 4,
      title: "Top 10 Travel Tips for 2025",
      description:
        "Make your next trip unforgettable with these expert tips and tricks.",
      image: "/hotels/kara-o-mula/gallery/gallery-img4.jpeg",
      url: "/blogs",
      date: "April 20, 2025",
    },
    {
      id: 5,
      title: "Why Malawi is Africa’s Hidden Gem",
      summary: "Explore Malawi’s best-kept secrets and cultural wonders.",
      image: "/hotels/kara-o-mula/gallery/gallery-img5.jpeg",
      url: "/blogs",
      date: "April 18, 2025",
    },
    {
      id: 6,
      title: "Hotel Trends to Watch This Year",
      summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
      image: "/hotels/kara-o-mula/gallery/gallery-img6.jpeg",
      url: "/blogs",
      date: "April 15, 2025",
    },
    {
      id: 7,
      title: "Hotel Trends to Watch This Year",
      summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
      image: "/hotels/kara-o-mula/gallery/gallery-img7.jpeg",
      url: "/blogs",
      date: "April 15, 2025",
    },
    {
      id: 8,
      title: "Hotel Trends to Watch This Year",
      summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
      image: "/hotels/kara-o-mula/gallery/gallery-img8.jpeg",
      url: "/blogs",
      date: "April 15, 2025",
    },
    {
      id: 9,
      title: "Hotel Trends to Watch This Year",
      summary: "From eco-luxury to AI concierge—what’s changing in hospitality.",
      image: "/hotels/kara-o-mula/gallery/gallery-img9.jpeg",
      url: "/blogs",
      date: "April 15, 2025",
    }
  ];

  return (
    <div className="min-h-screen">
    {/* Top Cover */}
    <div className="w-full relative h-[250px] md:h-[400px]">
      <Image
        src="/hotels/heritage/gallery/gallery.jpg"
        alt="Gallery Cover"
        fill
        className="object-cover"
      />
      <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold text-center px-4">
        Serendib Travels Gallery
      </h1>
    </div>
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Explore Our Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            href={post.url}
            key={post.id}
            className="bg-white shadow-md hover:shadow-lg transition overflow-hidden group"
          >
            <div className="relative h-48 md:h-60 w-full">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#FF741E] transition">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700">{post.description}</p>
              <p className="text-xs text-gray-500 mt-2">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
