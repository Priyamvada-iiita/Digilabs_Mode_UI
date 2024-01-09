// "use client"
import { useLogoContext } from '@/app/context/LogoContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useTextContext } from '@/app/context/TextContext';
import { Submission } from '@/app/lib/models';
import { GET } from '@/app/api/getsubmission/route';
interface Email {
  id: number;
  email: string;
}

const AdminForm = () => {
  const [buttonText, setButtonText] = useState('');
  const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);
  const [textError, setTextError] = useState<string>('');
  const [logoUrl, setLogoUrl] = useState('');
  const [logoError, setLogoError] = useState('');
  const { updateLogoUrl } = useLogoContext();
  const { updateTextContent } = useTextContext();
  const [emails, setEmails] = useState<Email[]>([]);
  const handleLogoSubmit = () => {
    // Validation if needed
    
    if (!logoUrl) {
      setLogoError('Logo URL is required');
      return;
    }

    // Update the global logo URL
    updateLogoUrl(logoUrl);

    // Clear the error and input field after successful update
    setLogoError('');
    setLogoUrl('');
  };
  const handleTextSubmit = () => {
    // Validation if needed
    console.log('Submitting Logo:', buttonText);
    if (!buttonText) {
      setTextError('Logo URL is required');
      return;
    }

    // Update the global logo URL
    updateTextContent(buttonText);

    // Clear the error and input field after successful update
    setTextError('');
    setButtonText('');
  };
  // const handleShowSubmit = async () => {
  //   try {
  //     // Fetch the updated list of submitted emails
  //     const emailsResponse = await GET();
  //     setSubmittedEmails(emailsResponse || []);
  //   } catch (error) {
  //     console.error('Failed to fetch submitted emails:');
  //   }
  // };
  
  

  useEffect(() => {
    // Make your API request
    fetch('/api/getsubmission')  // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of objects
        if (Array.isArray(data)) {
          setEmails(data);
        } else {
          console.error('Invalid data format received from the server');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  // The empty dependency array ensures that it only runs once on mount

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-yellow-500 '>
      <div className="container mx-auto p-4 bg-white rounded-xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>

          {/* Logo Update Section */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Image Update</h3>
            <div>
              <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Navbar Logo URL
              </label>
              <input
                type="text"
                id="logoUrl"
                className={`w-full border rounded py-1.5 px-3 ${
                  logoError ? 'border-red-500' : ''
                }`}
                value={logoUrl} 
                placeholder="Enter logo URL"
                onChange={(e) => setLogoUrl(e.target.value)}
              />
              {logoError && (
                <div className="text-red-500 text-sm mt-1">{logoError}</div>
              )}
            </div>
            <button
              type="button"
              onClick={handleLogoSubmit}
              className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit Logo
            </button>
          </div>

          {/* Text Update Section */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Text Update</h3>
            <div>
              <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700 mb-2">
                Header Button Text
              </label>
              <input
                type="text"
                id="buttonText"
                className={`w-full border rounded py-1.5 px-3 ${
                  textError ? 'border-red-500' : ''
                }`}
                value={buttonText} 
                placeholder="Enter button text"
                onChange={(e) => setButtonText(e.target.value)}
              />
              {textError && (
                <div className="text-red-500 text-sm mt-1">{textError}</div>
              )}
            </div>
            <button
              type="button"
              onClick={handleTextSubmit}
              className="bg-green-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            >
              Submit Text
            </button>
          </div>
        </div>

        {/* Display Submitted Emails */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Submitted Emails</h3>
         
          <ul>
            {/* {emails.map((email, index) => (
              <li key={index} className="text-dark">
                {email}
              </li>
            ))} */}
            {emails.map(emailObj => (
          <li key={emailObj.id}>{emailObj.email}</li>
        ))}
          </ul>
        </div>
        <div>
        <button
              type="button"
              onClick={()=> signOut()}
              className="justify-center bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Logout
            </button>
        </div>
        
      </div>
    </div>
  );
};

// app.get("/getAllUser", async(req:any, res:any)=>{
//   try {
//     const allemails = await Submission({});
//     res.send({status:"ok", data: allemails});

//   } catch (error) {
//     console.log(error);
//   }
// })


export default AdminForm;
