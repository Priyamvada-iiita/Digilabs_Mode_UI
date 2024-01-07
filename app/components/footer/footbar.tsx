import React from 'react'
import { Row, Container } from 'react-bootstrap';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
const Footbar = () => {
  return (
    <div>
        <footer className="bg-white text-dark font-Inter border-t-2 border-t-gray-100 mt-4">
        <Container className="mt-4">
          <Row className="space-y-4 items-center justify-center lg:space-y-4 ">
            {/* First Content */}
            <div className="items-center lg:justify-center space-y-4 lg:flex lg:flex-wrap ">
              {/* Part 1: Center Aligned Paragraph */}
              <div className="mx-auto max-w-4xl py-10 px-10 lg:justify-center lg:text-center text-dark ">
                <Image
                className='lg:mx-auto '
                src="/Mode UI Logo.png"
                width={100}
                height= {50}
                alt="Mode UI"
                />
                <p className="mt-4 text-base text-gray-600 leading-7">
                Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices
                </p>
              </div>
              {/* Part 2: Five Columns */}
              <div className=" border-t-2 border-t-slate-100 ">
                {/* Column 1 */}
                <div className='mt-10 flex flex-wrap lg:gap-40 gap-8 ml-4 mr-4 '>
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Company</h3>
                    <ul className="list-none py-2">
                        <li className="mb-2" >About Us</li>
                        <li className="mb-2">Pricing</li>
                        <li className="mb-2">Contact Us</li>
                        <li className="mb-2">Features</li>
                    </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Product</h3>
                    <ul className="list-none py-2">
                        <li className="mb-2">Figma design system</li>
                        <li className="mb-2">los kit</li>
                        <li className="mb-2">Android kit</li>
                        <li className="mb-2">Wireframe</li>
                    </ul>
                    </div>

                    {/* Column 3 */}
                    <div >
                    <h3 className="text-lg font-semibold mb-2">Resources</h3>
                    <ul className="list-none py-2">
                        <li className="mb-2">Template</li>
                        <li className="mb-2">Landing Page</li>
                        <li className="mb-2">Documentation</li>
                        <li className="mb-2">Comp Library</li>
                    </ul>

                    </div>

                    {/* Column 4 */}
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Legal</h3>
                    <ul className="list-none py-2">
                        <li className="mb-2">Privacy Policy</li>
                        <li className="mb-2">Terms & Condtions</li>
                        <li className="mb-2">Disclaimer</li>
                        <li className="mb-2">Affiliate Programme</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold mb-2">Support </h3>
                    <ul className="list-none py-2">
                        <li className="mb-2">Help Center</li>
                        <li className="mb-2">Raise Ticket</li>
                        <li className="mb-2">Report</li>
                        <li className="mb-2">Refund</li>
                    </ul>
                    </div>
                    
                </div>
                
              </div>
            </div>

            {/* Second Content */}
            <div className="text-center justify-between p-8">
              {/* Social Media Links */}
              <div className="flex justify-center lg:justify-center space-x-4 mb-4">
                <FaGithub color="gray" fontSize="1.5em"></FaGithub>
                <FaLinkedin color="gray" fontSize="1.5em"></FaLinkedin>
                <FaDiscord color="gray" fontSize="1.5em"></FaDiscord>
              
              </div>

              {/* All Rights Reserved */}
              <p className="text-base mb-2 text-gray-500">&copy; 2023 Mode UI Inc. All Rights Reserved.</p>
            </div>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footbar