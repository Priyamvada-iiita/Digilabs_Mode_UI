
import { Button, Container, Row } from 'react-bootstrap'
import { FiLogIn } from 'react-icons/fi'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { CiCreditCardOff } from "react-icons/ci";
import { MdAccountBalance } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";


const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // This code will only run on the client side
    const handleKeyPress = (e:KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    

    // Attach event listener for the Escape key
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuCard = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
    return (
    <div>
        <header className="bg-white  border-b border-t border-gray-300">
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-5 px-10 gap-2" aria-label="Global">
            <Container className='justify-between lg:px-4 gap-4'>
                <Row className="flex lg:gap-40 space-x-8">
                    <Image
                    src="/Mode UI Logo.png"
                    width={1000}
                    height= {0.5}
                    alt="Mode UI"
                    />
                <div className="hidden lg:mx-auto lg:flex lg:justify-center lg:space-x-2 lg:relative lg:gap-14">
            
                <div className="relative">
      <button
        type="button"
        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
        Card access
        <svg
          className={`h-5 w-5 flex-none text-gray-400 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {/* Dropdown content goes here */}
            <a href="#" className="flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50" onClick={closeDropdown}>
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <CiCreditCard1 color="black" fontSize="1.5em"></CiCreditCard1>
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Activate Card
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">consectetur adipiscing elit</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50" onClick={closeDropdown}>
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <CiCreditCardOff color="black" fontSize="1.5em"></CiCreditCardOff>
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Deactive Card
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">consectetur adipiscing elit</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50" onClick={closeDropdown}>
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <MdAccountBalance  fontSize="1.5em"></MdAccountBalance>
                </svg>
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Check Balance
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">consectetur adipiscing elit</p>
              </div>
            </a>
            {/* Add more dropdown options as needed */}
          </div>
        </div>
      )}
    </div>
                    

                    <a href="#" className=" flex-none text-sm font-semibold leading-6 text-gray-900">Banking </a>
                    <a href="#" className=" flex-none text-sm font-semibold leading-6 text-gray-900">Processing </a>
                    <a href="#" className=" flex-none text-sm font-semibold leading-6 text-gray-900">About</a>
                    <a href="#" className="flex-none text-sm font-semibold leading-6 text-gray-900">Carrier </a>
                    <a href="#" className="flex-none text-sm font-semibold leading-6 text-gray-900">Contact</a>
                </div>
                <div className="mx-auto flex flex-row gap-2">
                    <Button className="lg:-mx-3 flex bg-gray-300 rounded border-r-10 px-2 py-2 hover:bg-gray-200">
                    <p className='mx-auto text-lg font-bold leading-6 text-gray-600'>Login</p>
                    <FiLogIn color="gray" fontSize="1.5em"  />
                    </Button>
                    <div className="relative">
        {/* Button to open menu */}
                    <Button
                        type="button"
                        className="-m-2.5 inline-flex justify-center rounded-md p-4 text-gray-700 lg:hidden"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Button>

        {/* Dropdown menu */}
                    {isOpen && (
                         <div className="lg:hidden" role="dialog" aria-modal="true">
                         <div className="fixed inset-0 z-10"></div>
                         <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                           <div className="flex items-center justify-between">
                             <a href="#" className="-m-1.5 p-1.5">
                               <span className="sr-only">Your Company</span>
                               <Image
                    src="/Mode UI Logo.png"
                    width={100}
                    height= {20}
                    alt="Mode UI"
                    />
                             </a>
                             <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                               <span className="sr-only">Close menu</span>
                               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                               </svg>
                             </button>
                           </div>
                           <div className="mt-6 flow-root">
                             <div className="space-y-2 py-6">
                             <div className="-mx-3">
                                   <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false" onClick={toggleMenuCard}>
                                        <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Card access</p>
                                     <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                       <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                     </svg>
                                   </button>
                                   {/* Dropdown items */}
                                   
                            </div>
                               {/* Dropdown content */}
                               {isMenuOpen && (
                                <div className=" space-y-2" id="disclosure-1">
                                {/* Dropdown links */}
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Activate Card</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Deactive Card</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Check Balance</a>
                                {/* Add more links as needed */}
                              </div>
                               )}
                   
                               {/* Other menu items */}
                               <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Banking</a>
                               <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Processing</a>
                               <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
                               <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Carrier</a>
                               <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
                             </div>
                           </div>
                         </div>
                       </div>
                    )}
                    </div>
                </div>
                
                </Row>
            </Container>

            </nav>
        </header>
      </div>
  )
}

export default Navbars