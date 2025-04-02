import Image from 'next/image'
import React from 'react'

export default function Blogs() {
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
              <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
              Stories, Travel Tips & Luxury Stays
              </h1>
              <div className='h-80'>helo

              </div>
              
            </div>
    </div>
  )
}
