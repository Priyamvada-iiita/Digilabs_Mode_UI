import React from 'react'
import { BsArrowsFullscreen } from "react-icons/bs";
import { TbCreditCard } from "react-icons/tb";
import { useState } from 'react';
import Image from 'next/image';
const FeatureSection = () => {
  return (
    <div>
        
      <div className='flex min-h-screen flex-col items-center justify-between p-4 bg-white'>
        <div className="relative overflow-hidden justify-between p-4 " >         
          <div className="mx-auto max-w-4xl py-4 text-center text-dark">
              <h1 className="lg:text-6xl text-4xl">Elevating Card Programs with Cutting-Edge Technology</h1>
              <p className="mt-6 text-base text-gray-600 leading-7">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
              <div className="mt-10 flex items-center justify-center ">
                <a href="#" className="rounded-md px-4 py-3 text-16 font-semibold text-purple-rgba ">Compare All Pro features <span aria-hidden="true">→</span></a>
              </div> 
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center py-4 ">
            {/* First Card */}
            <div className="w-100 h-96 bg-purple-light rounded-tl-3xl rounded-tr-3xl overflow-hidden ">
            <Image
            src="/Group 204.png"
            className='p-8'
            width={500}
            height={500}
            alt="Picture of the author"
            />
            </div>

            {/* Second Card */}
            <div className="flex w-100 h-96 bg-purple-light rounded-tl-3xl rounded-tr-3xl overflow-hidden ">
                <div className="max-w-sm mx-auto bg-white mt-20 mb-20 ml-20 mr-20 border border-solid border-purple-400 rounded-xl ">
                    <div className="p-4">
                        <div className="flex flex-wrap items-center">
                            <h2 className="text-xl  text-dark">Spending</h2>

                            {/* Icon at the end */}
                            <div className="ml-auto">
                                <BsArrowsFullscreen className="mr-2" />
                            </div>
                        </div>
                        <div className='flex flex-wrap text-gray-600 gap-2'>
                            <TbCreditCard color="gray" fontSize= "1.5em"></TbCreditCard>
                            <p>9349 visa card</p>
                        </div>
                        
                        <div className="flex flex-wrap mt-4 gap-2">
                        <a href="#" className="text-dark text-2xl font-semibold ">127.14</a>
                        <p className='text-center text-xs p-1'> USD</p>
                        </div>
                        <div className='flex flex-wrap gap-8 text-xs'>
                            <p className="mt-2 text-gray-600">vs Last week</p>
                            <p className="mt-2 text-gray-600">Last Purchased ( Feb 24 19:59 UTC-5 )</p>
                        </div>
                        <p className="mt-2 text-gray-600">400 USD</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-fuchsia-200 relative">
                            <div className="bg-gray-200 h-2.5 rounded-full absolute" style={{ width: '2px', left: '25%' }}></div>
                            <div className="bg-gray-200 h-2.5 rounded-full absolute" style={{ width: '2px', left: '75%' }}></div>
                            <div className="bg-purple-rgba h-2.5 rounded-l" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
      </div>

      <div className=" flex flex-wrap p-20 font-Inter bg-white items-center justify-center text-center"> 
        <div className="max-w-xs mx-auto bg-white ">
          <div className="py-2">
            <h2 className="text-4xl font-semibold text-purple-rgba">2 Million</h2>
            <div className="mt-4">
              <a href="#" className="text-dark font-semibold ">Customer</a>
            </div>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
            
          </div>
        </div>

        <div className="max-w-xs mx-auto bg-white ">
          <div className="py-2">
            <h2 className="text-4xl font-semibold text-purple-rgba">1 K</h2>
            <div className="mt-4">
              <a href="#" className="text-dark font-semibold ">Downloads</a>
            </div>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
            
          </div>
        </div>
        <div className="max-w-xs mx-auto bg-white ">
          <div className="py-2">
            <h2 className="text-4xl font-semibold text-purple-rgba">$73 Million</h2>
            <div className="mt-4">
              <a href="#" className="text-dark font-semibold ">Transactions</a>
            </div>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
            
          </div>
        </div>
        <div className="max-w-xs mx-auto bg-white ">
          <div className="py-2">
            <h2 className="text-4xl font-semibold text-purple-rgba">2.0</h2>
            <div className="mt-4">
              <a href="#" className="text-dark font-semibold ">Latest Version</a>
            </div>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeatureSection