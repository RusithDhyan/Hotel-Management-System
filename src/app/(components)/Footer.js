import { Copyright, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="w-full p-6 mt-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-between">
        <div className="flex justify-center lg:justify-start">
          <Image
            className="w-40 sm:w-48 md:w-56 lg:w-60"
            src="/logo/Serendib.png"
            alt="serendib logo"
            width={1500}
            height={100}
          />
        </div>

        <div className="flex flex-row items-center justify-between gap-10 text-sm sm:text-base p-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link href="/">Home</Link>
          <Link href="/our-collections">Our Collection</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/offers">Offers</Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">

          <Link href="/blogs">Blogs</Link>
          <Link href="/blogs">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          </div>
          
        </div>

        <div className="flex flex-col items-center gap-4 text-center text-sm sm:text-base">
          <div>
            <h1 className="font-semibold">Contact Us</h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Mail width={20} height={20} color="#817e7e" />
              <span className="text-[#817e7e]">sales@serendibhotel.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Phone width={20} height={20} color="#817e7e" />
              <span className="text-[#817e7e]">+265 996 999 922</span>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Follow Us</h1>
            <div className="flex justify-center gap-4 mt-2 text-xl">
              <AiFillInstagram />
              <FaFacebookF />
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-sm sm:text-base md:text-lg">
            Join our newsletter for the latest updates!
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 mt-3 w-full max-w-xs">
            <input
              className="bg-gray-300 text-gray-700 p-2 w-full"
              placeholder="Enter your name"
            />
            <button className="bg-black text-white p-2 w-full sm:w-auto">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white px-5 py-2 flex flex-col sm:flex-row items-center justify-center gap-1 text-center text-xs sm:text-sm">
        <Copyright className="w-4 sm:w-5" />
        <span>
          2025 Serandib Hotels. All Rights Reserved | Designed & Developed By
          Perl Vista
        </span>
      </div>
    </div>
  );
}
