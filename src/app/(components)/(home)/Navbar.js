"use client"
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {

  const[isOpen,setIsOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className={` ${isHomePage ? "bg-transparent fixed top-0 w-full text-black z-50" : " text-black h-20 border border-1-solid"}`}>

    <div className="w-full h-15 flex flex-row items-center justify-between px-2">
      <div className="w-25 md:w-40 lg:w-48">
        <Link href="/">
          <Image src="/svg/Serendib.svg" alt="logo" width={150} height={50} className="w-full mt-5"/>
        </Link>
      </div>
      <div className="flex flex-row gap-10 ">
        <ul className="hidden md:flex flex-row justify-center items-center gap-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ">
          <Link href="/">Home</Link>
          <Link href="/hotels">Hotels</Link>
          <Link href="/offers">Offers</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>
        {/* <Menu className="text-blue-400" /> */}
        <button className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? null : <Menu size={28} /> }

        </button>

        {isOpen && (
        
        <div className="fixed inset-0 bottom-0 left-0 top-0 pt-20 w-full h-screen z-1 bg-gray-100 flex flex-col items-center justify-start gap-2 md:hidden">
          <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
            <X size={32} className="text-black" />
          </button>
           
          <a href="/" className="text-xl hover:text-gray-400">Home</a>
          <a href="/our-collections" className="text-lg hover:text-gray-400">Our Collection</a>
          <a href="/offers" className="text-xl hover:text-gray-400">Offers</a>
          <a href="/blogs" className="text-xl hover:text-gray-400">Blogs</a>
          <a href="/about" className="text-xl hover:text-gray-400">About</a>
          <a href="/contact" className="text-xl hover:text-gray-400">Contact</a></div>
         
      )}

        
      </div>
    </div>
    
    </nav>
    
  );
}
