import { useState } from "react";
import BlogAccordion from "./BlogAccordion";
import ExperienceAccordion from "./ExperienceAccordion";

const Tabs = () => {
  const blogPosts = [
    {
      title: "A Culinary Journey Through Fine Dining",
      content:
        "Enjoy an exquisite selection of dishes crafted by our expert chefs.",
      url: "/hotels/accordion/accordion4.jpg",
      nav: "/blogs/blog4-dining-in-malawi",
    },
    {
      title: "Exploring Luxury at Heritage by Serendib",
      content:
        "Discover the elegance and comfort of our hotel with world-class amenities.",
      url: "/hotels/accordion/accordion1.jpeg",
      nav: "/blogs/",
    },
    {
      title: "Top Attractions Near Limbe, Blantyre",
      content:
        "Explore beautiful sites and local experiences just minutes away from our hotel.",
      url: "/hotels/accordion/accordion7.jpg",
      nav: "/blogs/",
    }
    
  ];

  const experiencePosts = [
    {
      title: "The Thrill of Cable Walking",
      content:
        "Experience the ultimate adrenaline rush as you walk high above the ground, suspended by just a cable. Cable walking is not for the faint of heart, but for those seeking an unforgettable adventure, it offers a unique blend of excitement, breathtaking views, and personal challenge.",
      url: "/hotels/accordion/accordion3.jpeg",
      nav: "/experiences/exp3-walk-in-cable",
    },
    {
      title: "Into the Wild: Explore Untouched Beauty",
      content:
        "Step off the beaten path and into the heart of nature. Our guided wilderness experiences take you deep into Malawi’s most scenic landscapes, where wildlife roams free and every step feels like a new discovery.",
      url: "/hotels/accordion/accordion6.jpg",
      nav: "/experiences/",
    },
    {
      title: "Whispers of the Lake",
      content:
        "Explore beautiful sites and local experiences just minutes away from our hotel.",
      url: "/hotels/accordion/accordion2.jpeg",
      nav: "/experiences/",
    }
    
  ];

  const [activeTab, setActiveTab] = useState("blogs");

  return (
    <div className="w-full mx-auto mt-10 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-wrap gap-2 border-b border-gray-300">
        <button
          className={`pb-2 px-4 text-base sm:text-lg font-medium ${
            activeTab === "blogs"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("blogs")}
        >
          Blogs
        </button>
        <button
          className={`pb-2 px-4 text-base sm:text-lg font-medium ${
            activeTab === "experience"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "blogs" ? (
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Latest Blogs
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Here are the latest blog posts...
            </p>
            <BlogAccordion items={blogPosts} />
          </div>
        ) : (
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Your Experiences
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Read about personal experiences...
            </p>
            <ExperienceAccordion items={experiencePosts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
