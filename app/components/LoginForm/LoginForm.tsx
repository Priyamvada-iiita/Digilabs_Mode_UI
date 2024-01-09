"use client";
import React from 'react'
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { response } from 'express';

export default function LoginForm() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const respo: SignInResponse = await signIn("credentials", {
        username,
        password,
        redirect: false,
      }) ?? {}; // Provide an empty object as a default value
      
      // Check if there was an error during sign-in
      if (respo?.error) {
        // Handle the error
        setError("Invalid Credentials");
        return;
      }
      

      router.replace("AdminPanel");
    } catch (error) {
      console.log(error);
    }
 };

  return (
    <div><div className="flex min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 items-center flex-col justify-center px-6 py-12 lg:px-8 font-Inter">
    <div className="flex flex-wrap ml-4 mr-4 sm:w-full sm:max-w-sm lg:w-1/3">
      {/* Random Quote */}
      <p className=" text-center text-white text-xl font-bold mb-4">"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</p>
      
      {/* Login Card */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <img
          className="mx-auto h-10 w-auto"
          src="/Mode UI Logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Admin Login
        </h2>

        <form  onSubmit={handleSubmit} className="space-y-6 mt-6" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              User Name
            </label>
            <div className="mt-2">
              <input
                id="username"
                type="text"
                onChange={(e) => setusername(e.target.value)}
                // required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                // required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
            {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 gap-2">
          If you are an authorized personnel, You can make changes to logo, button text, and view submitted emails.
          <a href="/" className="mx-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Click here to Return to homepage
          </a>
        </p>
      </div>
    </div>
  </div></div>
  )
}

