"use client"
import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import { useRouter } from "next/navigation";
const EmailSubmissionForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log("email", email)
    const res = await fetch("api/submission", {
        method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
      // router.push("/");
    } catch (error) {
      console.log(error);
    }
    
    
    // console.log(error);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-yellow-500">
      <form onClick={handleSubmit} className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-indigo-500 py-2 px-3 focus:outline-none focus:border-indigo-700"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            
            className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Submit
          </button>
          
        </div>
        
      </form>
      <p className="mt-6 text-center text-sm text-gray-500 gap-2">
          <a href="/" className="mx-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              click to return to homepage
          </a>
        </p>
    </div>
  )
}

export default EmailSubmissionForm