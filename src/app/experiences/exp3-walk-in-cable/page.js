import Image from 'next/image'
import React from 'react'

export default function Experience3() {
  return (
    <div className='flex flex-col min-h-screen'>
       <div className=" w-full h-auto relative">
              <Image
                src="/experience/exp-bg3.jpg"
                alt="contact-img"
                width={1500}
                height={10}
                className="h-100 object-cover"
              />
             
            </div>
    </div>
  )
}
