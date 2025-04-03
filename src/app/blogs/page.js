import Image from "next/image";
import React from "react";
import Accordion from "../(components)/(blog)/Accordion";

export default function Blogs() {
  const blogPosts = [
    {
      title: "Exploring Luxury at Heritage by Serendib",
      content: "Discover the elegance and comfort of our hotel with world-class amenities.",
      url:"/hotels/accordion/accordion1.jpeg"
    },
    {
      title: "Top Attractions Near Limbe, Blantyre",
      content: "Explore beautiful sites and local experiences just minutes away from our hotel.",
      url:"/hotels/accordion/accordion2.jpeg"

    },
    {
      title: "A Culinary Journey Through Fine Dining",
      content: "Enjoy an exquisite selection of dishes crafted by our expert chefs.",
      url:"/hotels/accordion/accordion3.jpeg"

    },
    {
      title: "A Culinary Journey Through Fine Dining",
      content: "Enjoy an exquisite selection of dishes crafted by our expert chefs.",
      url:"/hotels/accordion/accordion4.jpg"

    },
    {
      title: "A Culinary Journey Through Fine Dining",
      content: "Enjoy an exquisite selection of dishes crafted by our expert chefs.",
      url:"/hotels/accordion/accordion5.jpeg"

    },

  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/images/blog.jpg"
          alt="blog-img"
          width={1500}
          height={10}
          className="h-100 object-cover"
        />

        <div className="absolute inset-0 bottom-0 flex items-end justify-center text-white text-5xl pb-4">
          Inside the Haven: Discover More
        </div>
      </div>

      <Accordion items={blogPosts}/>
      
    </div>
  );
}


