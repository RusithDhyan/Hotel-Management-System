import { Copyright, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bottom-0 top-0">
      <div className="w-full p-6 mt-10 flex flex-col md:flex-row sm:items-center md:items-center lg:items-start justify-between md:justify-start gap-5 ">
        <div className="flex sm:items-center">
          <Image
            className="  lg:items-center xs:justify-center"
            src="/logo/Serendib-tours.png"
            alt="serendib logo"
            width={250}
            height={10}
          />
        </div>
        <div className="flex-[1] flex flex-col items-center text-xs sm:text-sm md:text-md xl:text-lg">
          <Link
            href="/"
          >
            Home
          </Link>
          <Link
            href="/our-collections"
            
          >
            Our Collection
          </Link>
          <Link
            href="/offers"
          >
            Offers
          </Link>
          <Link
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            href="/about"
          >
            About
          </Link>
          <Link
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex-[1.5] h-30 flex-col item-center">
          <div className="flex flex-col item-center justify-around sm:text-sm md:text-md lg:text-lg">
            <div className=" flex-[2] px-2">
              <h1 className="text-center">Contact Us</h1>
              <div className="flex flex-row items-center justify-center gap-2 mt-2">
                <Mail width={20} height={20} color="#817e7e" />
                <h3 className="text-[#817e7e]">sales@serendibhotel.com</h3>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 mt-2">
                <Phone width={20} height={20} color="#817e7e" />
                <h3 className="text-[#817e7e]">+265 996 999 922</h3>
              </div>
            </div>
            <div className=" flex-[1] mt-2">
              <h1 className="text-center">Follow Us</h1>
              <div className="flex flex-row items-center justify-center gap-5 mt-2">
                <AiFillInstagram />
                <FaFacebookF />
                <IoLogoWhatsapp />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <h1 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-center">
            Join our newsletter for the latest updates!
          </h1>
          <div className="flex flex-row gap-2 mt-3 justify-center">
            <input
              className="bg-gray-300 text-gray-600 p-2"
              placeholder="Enter your name"
            />
            <button className="bg-black text-white p-2">Submit</button>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-white px-5 flex flex-row items-center justify-center h-10 gap-1">
        <Copyright className="w-5" />
        <h5 className="text-sm ">
          2025 Serandib Hotels.All Rights Rederverd | Design & Developed By Perl
          Vista
        </h5>
      </div>
    </div>
  );
}
