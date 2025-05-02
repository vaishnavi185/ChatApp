import React from 'react';

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-gray-200 rounded-xl shadow-xl p-8">
        <div className="flex flex-col justify-center">
          <div>
            <p className="subpixel-antialiased text-center font-bold text-3xl sm:text-4xl lg:text-5xl">
              SIGN UP
            </p>
          </div>
          <br />
          <div>
            <p className="text-center font-light text-sm sm:text-base">
              Welcome user! Hope your chatting experience is good with us.
            </p>
          </div>
          <br />
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
