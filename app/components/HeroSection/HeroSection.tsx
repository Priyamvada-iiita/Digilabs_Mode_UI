import React from 'react'
import Image from 'next/image'
import { TextProvider, useTextContext } from '@/app/context/TextContext'
const HeroSection = () => {
    const { textContent, updateTextContent } = useTextContext();
  return (
    <div className="flex flex-col items-center justify-between px-8 mt-8  bg-white">
    <div className="relative overflow" style={{ position: 'relative',}}>
      <div>
        <Image
          src="/Mesh.png"
          className='p-8'
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          alt="Picture of the author"
          priority
          />
        <div className="mx-auto max-w-2xl  text-center text-dark " style={{ position: 'relative', zIndex: 1 }}>
          <div className="mt-10 lg:flex  lg:justify-center py-6">
            <a href="#" className="text-base font-bold text-purple-rgba leading-8 ">Seamless Experience </a>            
          </div>
          <h1 className="lg:text-6xl text-4xl lg:font-bold font-bold">Unleashing the Next Generation of Card Solutions</h1>
          <p className="mt-6 text-xl text-gray-600 leading-7">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <TextProvider><div className="mt-10 flex items-center justify-center ">
          
            <a href="#" className="rounded-md bg-purple-rgba px-4 py-3 text-16 font-semibold text-white hover:bg-purple-700">{textContent} <span aria-hidden="true">→</span></a>
          </div></TextProvider>
          <a href="#" className="text-base text-gray-600 leading-4 ">*No credit card required </a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection