"use client";
import { AlignLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` ${
        isHomePage
          ? "bg-transparent fixed top-0 w-full z-50"
          : " text-black border-b border-b-white w-full top-0 z-50 fixed"
      } ${isScrolled ? "bg-white delay-200" : "bg-transparent"}`}
    >
      <div className="w-full h-15 flex flex-row items-center justify-between px-2">
        <div className="w-25 md:w-35 lg:w-35">
          <Link href="/">
            <Image
              src="/logo/Serendib-tours.png"
              alt="logo"
              width={150}
              height={50}
              className="w-full"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-10 ">
          <ul className="hidden md:flex flex-row justify-center items-center gap-3 text-xs sm:text-sm md:text-base lg:text-md xl:text-md ">
            <a href="/">Home</a>
            <Link href="/our-collections">Our Collection</Link>
            <Link href="/experiences">Experience</Link>
            <Link href="/offers">Offers</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>
          <Link href="/booking" className="text-sm lg:text-lg md:text-md">
            <button
              className="relative text-black py-1 border-b-2 border-transparent"
              onMouseEnter={activateHover}
              onMouseLeave={deactivateHover}
              onTouchStart={activateHover}
              onTouchEnd={deactivateHover}
            >
              Book Now
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                  isActive ? "w-full" : "w-10"
                }`}
              ></span>
            </button>
          </Link>
          {/* <Menu className="text-blue-400" /> */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? null : <AlignLeft size={28} className="" />}
          </button>

          {isOpen && (
            <div className="fixed inset-0 bottom-0 left-0 top-0 pt-20 w-full h-screen z-50 bg-gray-100 flex flex-col items-center justify-start gap-2 md:hidden bg-white/30 backdrop-blur-md">
              <button
                className="absolute top-4 right-2"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} className="text-black" />
              </button>

              <Link
                href="/"
                className="text-xl hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/our-collections"
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-gray-400"
              >
                Our Collection
              </Link>
              <Link
                href="/experiences"
                className="text-xl hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="/offers"
                className="text-xl hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Offers
              </Link>
              <Link
                href="/blogs"
                className="text-xl hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/gallery"
                className="text-xl hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-xl hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-xl hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
