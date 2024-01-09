"use client";
import Image from 'next/image'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import { FiLogIn } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

import { RiGlobalLine } from "react-icons/ri";
import { FiKey } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import Annoucement from './components/Annoucement/Annoucement';
import Navbars from './components/Navbar/Navbar';
import { RiStarSFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Footbar from './components/footer/footbar';
import FeatureSection from './components/Feature/FeatureSection';
import { FiCreditCard } from "react-icons/fi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { LogoProvider } from './context/LogoContext';
import { TextProvider } from './context/TextContext';
import HeroSection from './components/HeroSection/HeroSection';
export default function Home() {
  
  return (
    
    <div className='bg-white flex-wrap overflow-x-auto overflow-y-auto'>
      
      <Annoucement></Annoucement>
      <LogoProvider><Navbars></Navbars></LogoProvider>
      
      <TextProvider><HeroSection/></TextProvider>
      <div className="flex flex-wrap mt-10 items-center justify-center gap-4 mb-10">
          <div>
            <a href="/Auth" className="inline-flex items-center justify-center rounded-md bg-purple-rgba px-4 py-3 text-lg font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-700">
              Admin Login
              <RiAdminFill />
            </a>
            
          </div>
          <div>
            <a href="/EmailSubmission" className="inline-flex items-center justify-center rounded-md bg-purple-rgba px-4 py-3 text-lg font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-700">
              Email Submission Form
            </a>
            
          </div>
      </div>
      <div  className="flex items-center justify-center p-4 py-20 bg-white sm:flex sm:flex-wrap sm:justify-center">
        <div className="flex flex-wrap justify-center gap-8 mt-4">
            <img className='w-24 h-6 object-cover' src="https://seeklogo.com/images/N/nuxt-logo-321B362BDB-seeklogo.com.png"></img>
            <img className='w-17 h-6 object-cover' src="https://topofminds.com/wp-content/uploads/2021/09/miro-logo.png"></img>
            <img className='w-30 h-8 object-cover' src="https://theme.zdassets.com/theme_assets/9163007/bc5ad98f38cecee9eef217cdc16b390018981612.png"></img>
            <img className='w-28 h-8 object-cover fill-black' src="https://sendmoneyaustralia.com/wp-content/uploads/2021/03/Wise-logo-PNG.png"></img>
            <img className='w-24 h-6 object-cover' src="https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black-1.png"></img>
            <img className='w-28 h-6 object-cover' src="https://hostingfacts.com/wp-content/uploads/2020/05/Kinsta-logo-1024x207.png"></img>
            <img className='w-34 h-6 object-cover' src="https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png"></img>
            <img className='w-34 h-6 object-cover' src="https://seeklogo.com/images/B/behance-logo-43131B510D-seeklogo.com.png"></img>
        </div>
      </div>
      

      <div className='flex min-h-screen flex-col items-center justify-between p-4 bg-white'>
        <div className="relative overflow-hidden justify-between p-10 " >
          
          <div className="mx-auto max-w-4xl py-8 text-center text-dark">
              <h1 className="lg:text-6xl text-4xl">Elevating Card Programs with Cutting-Edge Technology</h1>
              <p className="mt-6 text-base text-gray-600 leading-7">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
              <div className="mt-10 flex items-center justify-center ">
                <a href="#" className="rounded-md px-4 py-3 text-16 font-semibold text-purple-rgba ">Compare All Pro features <span aria-hidden="true">→</span></a>
              </div> 
          </div>

          <div className='flex flex-wrap gap-4 p-8 items-center justify-center'>
            
            <div className="max-w-sm mx-auto items-center justify-center p-4 bg-white overflow-hidden ">
              <div className="p-2 flex flex-col items-center justify-center gap-2">
                <div className="relative inline-block py-6 items-center justify-center">
                  <div className="absolute -top-1 -left-1 bg-purple-100 rounded-full p-2">
                    <RiGlobalLine color="purple" fontSize="1.5em" ></RiGlobalLine>
                  </div>
                </div>
                <h2 className="text-sm font-semibold items-center justify-center text-gray-800">Globally Accepted</h2>
                <p className="mt-2 text-xs text-center px-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</p>
              </div>
            </div>

            <div className="max-w-sm mx-auto items-center justify-center p-4 bg-white overflow-hidden ">
              <div className="p-2 flex flex-col items-center justify-center gap-2">
                <div className="relative inline-block py-6 items-center justify-center">
                  <div className="absolute -top-1 -left-1 bg-purple-100 rounded-full p-2">
                    <FiKey color="purple" fontSize="1.5em" ></FiKey>
                  </div>
                </div>
                <h2 className="text-sm font-semibold items-center justify-center text-gray-800">Biometric Integrated</h2>
                <p className="mt-2 text-xs text-center px-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</p>
              </div>
            </div>

            <div className="max-w-sm mx-auto items-center justify-center p-4 bg-white overflow-hidden ">
              <div className="p-2 flex flex-col items-center justify-center gap-2">
                <div className="relative inline-block py-6 items-center justify-center">
                  <div className="absolute -top-1 -left-1 bg-purple-100 rounded-full p-2">
                    <FiLock color="purple" fontSize="1.5em" ></FiLock>
                  </div>
                </div>
                <h2 className="text-sm font-semibold items-center justify-center text-gray-800">Fully Secured</h2>
                <p className="mt-2 text-xs text-center px-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureSection></FeatureSection>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 font-Inter sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src="https://sendmoneyaustralia.com/wp-content/uploads/2021/03/Wise-logo-PNG.png" alt=""></img>
          <figure className="mt-10">
            <blockquote className="text-center text-10xl px-6 font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 ">
              <p>I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</p>
            </blockquote>
            <figcaption className="mt-10">
              <img className="mx-auto h-10 w-10 rounded-full" src="https://cdn-p.ways.to/img/answers/RSqPcI9z.jpg" alt=""></img>
              <div className="mt-4 flex flex-col items-center justify-center">
                <div className="  text-lg font-semibold text-gray-900">Nick Babich</div>
                <div className="text-gray-600 text-sm">Lead Designer</div>
                <div className='flex flex-wrap p-4'>
                  <RiStarSFill color="gold" fontSize="1.5em"></RiStarSFill>
                  <RiStarSFill color="gold" fontSize="1.5em"></RiStarSFill>
                  <RiStarSFill color="gold" fontSize="1.5em"></RiStarSFill>
                  <RiStarSFill color="gold" fontSize="1.5em"></RiStarSFill>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      
      <div className="mx-auto max-w-2xl lg:max-w-4xl mb-10 py-4">
        <blockquote className="text-center px-10  text-gray-900  ">
          <p className='lg:text-6xl text-4xl'>Unlock Limitless Possibilities with Our New Card Solutions</p>
        </blockquote>
        <div className="flex flex-wrap mt-10 items-center justify-center gap-4 mb-10">
          <div>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-purple-rgba px-4 py-3 text-lg font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-700">
              Unlock your card
              <FiCreditCard className="ml-2" />
            </a>
          </div>
          <div>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-gray-400 px-4 py-3 text-lg font-semibold text-white hover:bg-gray-300 focus:outline-none focus:ring focus:border-gray-700">
              Customer Support
              <AiOutlineCustomerService className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      <Footbar></Footbar>
    </div>
  )
}
